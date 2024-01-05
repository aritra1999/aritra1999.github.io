<script lang="ts">
	import { onMount } from 'svelte';
	import type { PLItem } from '$lib/types/types';

	import Loading from '$lib/components/loading/Loading.svelte';
	import { Github, MoveRight } from 'lucide-svelte';

	export let item: PLItem;

	let loading = false;
	let thumbnail: any;

	onMount(async () => {
		loading = true;
		thumbnail = (await import(`../../images/${item.thumbnail}.png`)).default;
		loading = false;
	});
</script>

<div class="card border">
	<div class="h-48 w-full">
		{#if loading}
			<div class="flex h-48 w-full items-center justify-center text-slate-600">
				<Loading />
			</div>
		{:else}
			<img class="h-48 w-full rounded-t-2xl border-b object-cover" src={thumbnail} alt="loading" />
		{/if}
	</div>
	<div class="px-6 pb-4 pt-6">
		<div class="mb-2 flex items-center">
			<h3 class="flex items-center text-xl font-bold">
				{item.title}
			</h3>
			{#if item.ongoing}
				<span
					class="ml-2 rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-600"
					>Ongoing</span
				>
			{:else}
				<span class="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-600"
					>Finised</span
				>
			{/if}
		</div>
		<p class="mb-2 text-sm font-normal text-slate-600">{item.description}</p>
		<div>
			{#each item.tags as tag}
				<div class="tag">{tag}</div>
			{/each}
		</div>
		<div class="card-link-container">
			{#each item.links as link}
				<div class="card-link">
					<a href={link.link} target="_blank" rel="noreferrer" class="flex items-center">
						{#if link.type === 'Github'}
							<Github class="h-6 w-6" />
						{:else}
							{link.type}
							<MoveRight class="ml-2 h-4 w-4" />
						{/if}
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>
