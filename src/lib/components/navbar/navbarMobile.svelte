<script lang="ts">
	import '#lib/components/navbar/navbar.postcss';
	import Sidebar from '#lib/components/sidebar/sidebar.svelte';
	import Profile from '#lib/components/navbar/profile.svelte';
	import SearchBar from '#lib/components/navbar/searchBar.svelte';
	import ThemeToggle from '#lib/components/navbar/themeToggle.svelte';
	import { getRandomEmoji } from './utils.js';
</script>

<div class="navbar-container p-4">
	<div
		class="flex h-[3rem] w-full items-center justify-between border bg-white px-4 text-sm text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400"
	>
		<div class="flex items-center font-semibold text-neutral-800">
			<Sidebar />
			<h2 class="mr-2 text-2xl">{getRandomEmoji()}</h2>
		</div>
		<div class="mx-2 w-[calc(50vw)]">
			<SearchBar variant="mobile" />
		</div>
		<div class="flex items-center">
			<ThemeToggle />
			<Profile />
		</div>
	</div>
</div>
