import { GIPHY_KEY } from '$app/env/private';
import type { PageServerLoad } from './$types';

const FALLBACK_GIF = 'https://cdn.dribbble.com/users/464600/screenshots/4907524/glasses.gif';
const CACHE_TTL_MS = 3_600_000;

let cachedGif: { url: string; expires: number } | undefined;

export const load: PageServerLoad = async ({ fetch }) => {
	if (cachedGif && cachedGif.expires > Date.now()) {
		return { gif: cachedGif.url };
	}
	try {
		if (!GIPHY_KEY) throw new Error('missing Giphy key');
		const res = await fetch(
			`https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_KEY}&tag=funny&rating=pg-13`
		);
		const gif = (await res.json()).data.images.original.url;
		cachedGif = { url: gif, expires: Date.now() + CACHE_TTL_MS };
		return { gif };
	} catch {
		return {
			gif: FALLBACK_GIF
		};
	}
};
