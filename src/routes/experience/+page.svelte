<script lang="ts">
	import AboutCard from '$lib/components/card/AboutCard.svelte';

	export let data;
</script>

<div class="px-3 py-10 lg:px-6">
	<div class="columns-lg gap-4">
		{#each data.experiences as experience}
			<AboutCard item={experience} />
		{/each}
	</div>
</div>
