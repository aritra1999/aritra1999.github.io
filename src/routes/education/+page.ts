import items from '$lib/data/about.json';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		educationList: items.education
	};
};
