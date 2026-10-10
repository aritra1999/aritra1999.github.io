import books from '#lib/data/books.json';
import blogs from '#lib/data/blogs.json';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		books,
		blogs
	};
};
