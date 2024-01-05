<script lang="ts">
	import PLCard from '$lib/components/card/PLCard.svelte';

	export let data;
</script>

<div class="px-3 py-10 lg:px-6">
	<div class="columns-sm gap-4">
		{#each data.papers as paper}
			<div class="inline-block w-full">
				<PLCard item={paper} />
			</div>
		{/each}
	</div>
</div>
