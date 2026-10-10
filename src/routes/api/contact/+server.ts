import { DISCORD_WEBHOOK_URL } from '$app/env/private';
import * as v from 'valibot';
import type { RequestHandler } from './$types';

const WINDOW_MS = 10 * 60_000;
const MAX_REQUESTS_PER_WINDOW = 3;

// In-memory sliding window per client IP. Note: on Cloudflare Workers this
// is scoped to a single isolate, so it blunts casual spam but is not a
// global counter. Pair with a Cloudflare rate-limiting rule for hard limits.
const hits = new Map<string, number[]>();

function checkRateLimit(ip: string): { limited: boolean; retryAfter: number } {
	const now = Date.now();
	const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
	if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
		hits.set(ip, recent);
		return { limited: true, retryAfter: Math.ceil((recent[0] + WINDOW_MS - now) / 1000) };
	}
	recent.push(now);
	hits.set(ip, recent);
	if (hits.size > 1000) {
		for (const [key, times] of hits) {
			if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
		}
	}
	return { limited: false, retryAfter: 0 };
}

function sanitize(text: string): string {
	// Neutralize @everyone / @here so senders can't ping the whole server.
	return text.replace(/@(everyone|here)/gi, '@\u200b$1');
}

const ContactPayload = v.object({
	from: v.pipe(
		v.string(),
		v.trim(),
		v.email('Please provide a valid email address.'),
		v.maxLength(254, 'Email address is too long.')
	),
	subject: v.pipe(
		v.string(),
		v.trim(),
		v.minLength(1, 'Please provide a subject.'),
		v.maxLength(120, 'Subject is too long.')
	),
	message: v.pipe(
		v.string(),
		v.trim(),
		v.minLength(1, 'Please write a message.'),
		v.maxLength(1500, 'Message is too long.')
	),
	company: v.optional(v.string())
});

export const POST: RequestHandler = async (event) => {
	let body: unknown;
	try {
		body = await event.request.json();
	} catch {
		return Response.json({ error: 'Invalid request body.' }, { status: 400 });
	}

	const parsed = v.safeParse(ContactPayload, body);
	if (!parsed.success) {
		const message = parsed.issues[0]?.message ?? 'Invalid request.';
		return Response.json({ error: message }, { status: 400 });
	}
	const { from, subject, message, company } = parsed.output;

	// Honeypot: bots fill hidden fields, humans can't. Fail silently.
	if (company?.trim()) {
		return Response.json({ ok: true });
	}

	const { limited, retryAfter } = checkRateLimit(event.getClientAddress());
	if (limited) {
		return Response.json(
			{ error: 'Too many messages. Please wait a few minutes and try again.' },
			{ status: 429, headers: { 'Retry-After': String(retryAfter) } }
		);
	}

	if (!DISCORD_WEBHOOK_URL) {
		console.error('DISCORD_WEBHOOK_URL is not configured');
		return Response.json({ error: 'Messaging is currently unavailable.' }, { status: 500 });
	}

	const content = `**New portfolio message**\n**From:** ${sanitize(from)}\n**Subject:** ${sanitize(subject)}\n\n${sanitize(message)}`;

	try {
		const res = await event.fetch(DISCORD_WEBHOOK_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ content }),
			signal: AbortSignal.timeout(10_000)
		});
		if (!res.ok) {
			console.error(`Discord webhook failed with status ${res.status}`);
			return Response.json({ error: 'Could not deliver your message.' }, { status: 502 });
		}
	} catch (error) {
		console.error('Discord webhook request failed', error);
		return Response.json({ error: 'Could not deliver your message.' }, { status: 502 });
	}

	return Response.json({ ok: true });
};
