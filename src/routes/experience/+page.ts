import experiences from '#lib/data/experience.json';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		experiences
	};
};
