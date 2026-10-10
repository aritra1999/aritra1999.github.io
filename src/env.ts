import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PUBLIC_GIPHY_KEY: {
		public: true,
		description: 'API key for fetching a random GIF on the home page'
	}
});
