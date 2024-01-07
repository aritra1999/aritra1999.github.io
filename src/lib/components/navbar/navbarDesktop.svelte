<script lang="ts">
	import '$lib/components/navbar/navbar.postcss';
	import Sidebar from '$lib/components/sidebar/sidebar.svelte';
	import Profile from '$lib/components/navbar/profile.svelte';
	import { Grip, HelpCircle, Search, Settings } from 'lucide-svelte';
	import { getRandomEmoji } from './utils';
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

	<div class="navbar-search-container">
		<input
			type="search"
			name="name"
			placeholder="Search all conversations"
			class="mx-2 w-full bg-transparent p-1"
		/>
		<Search class="h-5 w-5 text-neutral-900" />
	</div>

	<div class="flex items-center space-x-4">
		<div class="navbar-pill">
			<div class="mr-3 h-3 w-3 rounded-full bg-green-500" />
			Active
		</div>
		<div class="icon-container">
			<HelpCircle class="h-5 w-5" />
		</div>
		<div class="icon-container">
			<Settings class="h-5 w-5" />
		</div>
		<div class="icon-container">
			<Grip class="h-5 w-5" />
		</div>
		<Profile />
	</div>
</div>

<style lang="postcss">
	.navbar-pill {
		@apply flex items-center justify-center border bg-background px-5 py-3 text-sm font-medium text-neutral-500 hover:bg-neutral-200;
	}
</style>
