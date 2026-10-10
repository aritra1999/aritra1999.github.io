import { defineEnvVars } from '@sveltejs/kit/env';
import * as v from 'valibot';

export const variables = defineEnvVars({
	GIPHY_KEY: {
		// Optional: the home page falls back to a static GIF without it.
		schema: v.optional(v.string()),
		description: 'Server-only API key for fetching a random GIF on the home page'
	},
	DISCORD_WEBHOOK_URL: {
		// Optional: /api/contact reports "unavailable" without it instead of
		// failing the whole worker at startup.
		schema: v.optional(v.string()),
		description: 'Server-only Discord channel webhook URL for contact form messages'
	}
});
