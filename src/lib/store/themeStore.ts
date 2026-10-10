import { browser } from '$app/env';
import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

function readTheme(): Theme {
	if (!browser) return 'light';
	return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
	if (!browser) return;
	document.documentElement.classList.toggle('dark', theme === 'dark');
	try {
		localStorage.setItem('theme', theme);
	} catch {
		// private mode etc. — theme just won't persist
	}
}

function createThemeStore() {
	const { subscribe, set } = writable<Theme>('light');

	return {
		subscribe,
		sync: () => set(readTheme()),
		toggle: () => {
			const next: Theme = readTheme() === 'dark' ? 'light' : 'dark';
			applyTheme(next);
			set(next);
		}
	};
}

export const themeStore = createThemeStore();
