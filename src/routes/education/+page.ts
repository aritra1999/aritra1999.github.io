import educationList from '#lib/data/education.json';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		educationList
	};
};
