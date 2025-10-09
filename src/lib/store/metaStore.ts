import { writable } from 'svelte/store';

interface MetaStoreState {
	screen: 'desktop' | 'mobile';
	showSidebar: boolean;
	showContactForm: boolean;
}

function createMetaStore() {
	const { subscribe, set, update } = writable<MetaStoreState>({
		screen: 'desktop',
		showSidebar: true,
		showContactForm: false
	});

	return {
		subscribe,
		set: (values: Partial<MetaStoreState>) => {
			update((state) => ({ ...state, ...values }));
		},
		get screen() {
			let currentValue: MetaStoreState | undefined;
			subscribe((value) => (currentValue = value))();
			return currentValue!.screen;
		},
		get showSidebar() {
			let currentValue: MetaStoreState;
			subscribe((value) => (currentValue = value))();
			return currentValue!.showSidebar;
		},
		get showContactForm() {
			let currentValue: MetaStoreState;
			subscribe((value) => (currentValue = value))();
			return currentValue!.showContactForm;
		},
		set screen(value: 'desktop' | 'mobile') {
			update((state) => ({ ...state, screen: value }));
		},
		set showSidebar(value: boolean) {
			update((state) => ({ ...state, showSidebar: value }));
		},
		set showContactForm(value: boolean) {
			update((state) => ({ ...state, showContactForm: value }));
		}
	};
}

export const metaStore = createMetaStore();
