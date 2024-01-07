<script lang="ts">
	import '$lib/components/navbar/navbar.postcss';
	import Sidebar from '$lib/components/sidebar/sidebar.svelte';
	import Profile from '$lib/components/navbar/profile.svelte';
	import { getRandomEmoji } from './utils';
</script>

<div class="navbar-container p-4">
	<div
		class="flex h-[3rem] w-full items-center justify-between border bg-white px-4 text-sm text-neutral-600"
	>
		<div class="flex items-center font-semibold text-neutral-800">
			<Sidebar />
			<h2 class="mr-2 text-2xl">{getRandomEmoji()}</h2>
		</div>
		<input
			type="search"
			name="name"
			placeholder="Search all conversations"
			class="mx-2 w-[calc(50vw)] bg-transparent p-1"
		/>
		<Profile />
	</div>
</div>
