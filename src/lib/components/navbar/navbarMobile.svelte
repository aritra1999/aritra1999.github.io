<script lang="ts">
	import '$lib/components/navbar/navbar.postcss';
	import Sidebar from '$lib/components/sidebar/sidebar.svelte';
	import Profile from '$lib/components/navbar/profile.svelte';
	import { Mailbox } from 'lucide-svelte';
</script>

<div class="navbar-container p-2">
	<div
		class="flex w-full items-center justify-between rounded-lg border bg-white px-4 py-2 text-sm text-slate-600"
	>
		<div class="flex items-center font-semibold text-slate-800">
			<Sidebar />
			<Mailbox class="mr-2 h-10 w-10 text-red-600" />
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
