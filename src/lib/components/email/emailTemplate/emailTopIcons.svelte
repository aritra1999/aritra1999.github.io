<script>
	import { Printer, Reply, Star } from 'lucide-svelte';
	const icons = [Printer, Reply, Star];
</script>

<div class="sapce-x-4 flex items-center justify-center text-neutral-900">
	{#each icons as icon}
		<div class="bg-background p-3 hover:bg-neutral-100">
			<svelte:component this={icon} class="h-5 w-5" />
		</div>
	{/each}
</div>
