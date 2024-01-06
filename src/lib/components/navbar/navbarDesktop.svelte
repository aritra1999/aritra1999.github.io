<script lang="ts">
	import '$lib/components/navbar/navbar.postcss';
	import Sidebar from '$lib/components/sidebar/sidebar.svelte';
	import Profile from '$lib/components/navbar/profile.svelte';
	import { Mailbox, Grip, HelpCircle, Search, Settings } from 'lucide-svelte';
</script>

<div class="navbar-container px-8 py-2">
	<div class="flex items-center font-semibold">
		<Sidebar />
		<a href="/">
			<div class="flex cursor-pointer items-center justify-center">
				<Mailbox class="mr-2 h-8 w-8 text-red-600" />
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
		<Search class="h-5 w-5 text-slate-900" />
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
		@apply flex items-center justify-center border bg-background px-5 py-3 text-sm font-medium text-slate-500 hover:bg-slate-200;
	}
</style>
