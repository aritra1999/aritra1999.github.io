<script lang="ts">
	import { Calendar, MoveRight } from '@lucide/svelte';

	const { item }: { item: any } = $props();
	let thumbnail = $state<string>();

	$effect(() => {
		const loadThumbnail = async () => {
			thumbnail = (await import(`../../images/${item.logo}.png`)).default;
		};
		loadThumbnail();
	});
</script>

<div class="card border p-8">
	<div class="mb-6 flex items-center justify-between text-lg font-bold">
		<h3 class="pr-4 text-xl font-bold">{item.name}</h3>
		{#if thumbnail}
			<img class="h-8 rounded-md" src={thumbnail} alt={item.name} />
		{/if}
	</div>
	<ol class="relative mx-4 border-l border-neutral-200">
		{#each item.roles as role}
			<li class="mb-4 ml-6">
				<span
					class="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white"
				>
					<Calendar class="size-3 text-blue-500" />
				</span>
				<h3 class="flex items-center text-lg font-semibold text-neutral-900">
					{#if role.scope}{role.scope}{/if}
					{#if role.role}{role.role}{/if}
					{#if role.latest}
						<span
							class="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800"
						>
							Latest
						</span>
					{/if}
				</h3>
				<time class="text-sm font-normal leading-none text-neutral-500">{@html role.duration}</time>
				{#if role.description}
					<div class="mt-2 text-sm font-normal text-neutral-600">
						{#each role.description as des}
							<ul class="list-outside list-disc pl-6">
								<li>{des}</li>
							</ul>
						{/each}
					</div>
				{/if}
			</li>
		{/each}
	</ol>
	{#if item.technologies}
		<div class="mr-4 px-2 pt-4">
			{#each item.technologies as tech}
				<div class="tag">{tech}</div>
			{/each}
		</div>
	{/if}
	{#if item.score}<p class="mb-2 font-medium text-neutral-800">
			CGPA: {item.score}
		</p>{/if}
	<div class="card-link-container">
		<div class="flex items-center space-x-1 text-sm font-medium text-blue-600">
			<a href={item.url} target="_blank" rel="noreferrer">Show more</a>
			<MoveRight class="size-4" />
		</div>
	</div>
</div>
