<script>
	import { page } from '$app/state';
	import { Forward, Reply, Flag } from '@lucide/svelte';

	const options = [
		{
			title: 'Forward',
			icon: Forward
		},
		{
			title: 'Reply',
			icon: Reply
		},
		{
			title: 'Report',
			icon: Flag
		}
	];
</script>

{#if page.url.pathname !== '/'}
	<div class="flex justify-between space-x-4 border-t p-4 pb-5 font-medium sm:justify-end">
		{#each options as option}
			<button
				class="flex items-center rounded-lg border bg-neutral-200 px-3 py-2 text-sm hover:border-blue-500 hover:bg-blue-500 hover:text-white sm:px-4 sm:py-2 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:border-blue-400 dark:hover:bg-blue-600"
			>
				<option.icon class="mb-1 mr-2 size-4" />
				<div>{option.title}</div>
			</button>
		{/each}
	</div>
{/if}
