import type { Component } from 'svelte';
import {
	BookOpen,
	Briefcase,
	FolderKanban,
	GraduationCap,
	Newspaper,
	Rss
} from '@lucide/svelte';
import blogs from '#lib/data/blogs.json';
import books from '#lib/data/books.json';
import education from '#lib/data/education.json';
import experience from '#lib/data/experience.json';
import papers from '#lib/data/papers.json';
import projects from '#lib/data/projects.json';

export interface SearchItem {
	title: string;
	section: string;
	href: string;
	detail: string;
	haystack: string;
}

export const sectionIcons: Record<string, Component> = {
	Projects: FolderKanban,
	Experience: Briefcase,
	Education: GraduationCap,
	Papers: Newspaper,
	Books: BookOpen,
	Blogs: Rss
};

type JsonRecord = Record<string, unknown>;

function str(value: unknown): string {
	return typeof value === 'string' ? value : '';
}

function strArray(value: unknown): string[] {
	return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
}

function stripHtml(value: string): string {
	return value.replace(/<[^>]*>/g, '');
}

function makeItem(
	title: string,
	section: string,
	href: string,
	detail: string,
	extra: string[] = []
): SearchItem {
	return {
		title,
		section,
		href,
		detail,
		haystack: [title, section, detail, ...extra].join(' ').toLowerCase()
	};
}

function buildIndex(): SearchItem[] {
	const items: SearchItem[] = [];

	for (const project of projects as JsonRecord[]) {
		const title = str(project.title);
		if (!title) continue;
		const tags = strArray(project.tags);
		items.push(
			makeItem(
				title,
				'Projects',
				'/projects',
				tags.length ? tags.join(' · ') : str(project.description).slice(0, 80),
				[str(project.description), ...tags]
			)
		);
	}

	for (const job of experience as JsonRecord[]) {
		const name = str(job.name);
		if (!name) continue;
		const roles = Array.isArray(job.roles) ? (job.roles as JsonRecord[]) : [];
		const latest = roles[0] ?? {};
		const detail = [str(latest.role), stripHtml(str(latest.duration))]
			.filter(Boolean)
			.join(' · ');
		items.push(
			makeItem(name, 'Experience', '/experience', detail, [
				...roles.map((role) => str(role.role)),
				...strArray(job.technologies)
			])
		);
	}

	for (const school of education as JsonRecord[]) {
		const name = str(school.name);
		if (!name) continue;
		const roles = Array.isArray(school.roles) ? (school.roles as JsonRecord[]) : [];
		const first = roles[0] ?? {};
		const detail = [str(first.scope), str(first.role)].filter(Boolean).join(' · ');
		items.push(makeItem(name, 'Education', '/education', detail));
	}

	for (const paper of papers as JsonRecord[]) {
		const title = str(paper.title);
		if (!title) continue;
		const tags = strArray(paper.tags);
		items.push(
			makeItem(
				title,
				'Papers',
				'/papers',
				tags.length ? tags.join(' · ') : str(paper.description).slice(0, 80),
				[str(paper.description), ...tags]
			)
		);
	}

	for (const book of books as JsonRecord[]) {
		const title = str(book.title);
		if (!title) continue;
		items.push(
			makeItem(title, 'Books', '/bookshelf', `by ${str(book.author)}`, [
				str(book.author),
				str(book.description)
			])
		);
	}

	for (const blog of blogs as JsonRecord[]) {
		const title = str(blog.title);
		if (!title) continue;
		items.push(
			makeItem(title, 'Blogs', '/bookshelf', str(blog.description).slice(0, 80), [
				str(blog.author),
				str(blog.description)
			])
		);
	}

	return items;
}

const index = buildIndex();

export function searchSite(query: string, limit = 8): SearchItem[] {
	const q = query.trim().toLowerCase();
	if (!q) return [];
	const titleHits: SearchItem[] = [];
	const otherHits: SearchItem[] = [];
	for (const item of index) {
		if (item.title.toLowerCase().includes(q)) titleHits.push(item);
		else if (item.haystack.includes(q)) otherHits.push(item);
	}
	return [...titleHits, ...otherHits].slice(0, limit);
}
