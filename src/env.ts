import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	GIPHY_KEY: {
		description: 'Server-only API key for fetching a random GIF on the home page'
	}
});
