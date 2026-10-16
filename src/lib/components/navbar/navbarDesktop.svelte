<script lang="ts">
	import '#lib/components/navbar/navbar.postcss';
	import Sidebar from '#lib/components/sidebar/sidebar.svelte';
	import Profile from '#lib/components/navbar/profile.svelte';
	import SearchBar from '#lib/components/navbar/searchBar.svelte';
	import ThemeToggle from '#lib/components/navbar/themeToggle.svelte';
	import { Grip, HelpCircle } from '@lucide/svelte';
	import { getRandomEmoji } from './utils.js';
</script>

<div class="navbar-container px-8">
	<div class="flex items-center font-semibold">
		<Sidebar />
		<a href="/">
			<div class="flex cursor-pointer items-center justify-center">
				<h2 class="mr-2 text-3xl">{getRandomEmoji()}</h2>
			</div>
		</a>
	</div>

	<div class="w-1/3">
		<SearchBar />
	</div>

	<div class="flex items-center space-x-4">
		<div class="navbar-pill">
			<div class="mr-3 h-3 w-3 rounded-full bg-green-500"></div>
			Active
		</div>
		<div class="icon-container">
			<HelpCircle class="h-5 w-5" />
		</div>
		<ThemeToggle />
		<div class="icon-container">
			<Grip class="h-5 w-5" />
		</div>
		<Profile />
	</div>
</div>

<style lang="postcss">
	.navbar-pill {
		@apply flex items-center justify-center border bg-background px-5 py-3 text-sm font-medium text-neutral-500 hover:bg-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-800;
	}
</style>
