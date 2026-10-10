<script lang="ts">
	import PLCard from '#lib/components/card/PLCard.svelte';

	const { data } = $props();
</script>

<div class="px-3 py-10 lg:px-6">
	<div class="columns-xs gap-4">
		{#each data.projects as project}
			<div class="inline-block w-full">
				<PLCard item={project} />
			</div>
		{/each}
	</div>
</div>
