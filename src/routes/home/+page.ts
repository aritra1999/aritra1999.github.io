import { PUBLIC_GIPHY_KEY } from '$app/env/public';

export async function load({ fetch }) {
	try {
		if (!PUBLIC_GIPHY_KEY) throw new Error('missing Giphy key');
		const res = await fetch(
			`https://api.giphy.com/v1/gifs/random?api_key=${PUBLIC_GIPHY_KEY}&tag=funny&rating=pg-13`
		);
		const gif = (await res.json()).data.images.original.url;
		return { gif };
	} catch {
		return {
			gif: 'https://cdn.dribbble.com/users/464600/screenshots/4907524/glasses.gif'
		};
	}
}
