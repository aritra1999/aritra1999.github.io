<script lang="ts">
	import { Calendar } from '@lucide/svelte';

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
		<a
			href={item.url}
			target="_blank"
			rel="noreferrer"
			class="pr-4 text-xl font-bold hover:text-blue-600 hover:underline dark:hover:text-blue-400"
		>
			{item.name}
		</a>
		{#if thumbnail}
			<img class="h-8 rounded-md" src={thumbnail} alt={item.name} loading="lazy" decoding="async" />
		{/if}
	</div>
	<ol class="relative mx-4 border-l border-neutral-200 dark:border-border">
		{#each item.roles as role}
			<li class="mb-4 ml-6">
				<span
					class="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:border dark:border-blue-400/25 dark:bg-blue-500/20 dark:ring-card"
				>
					<Calendar class="size-3 text-blue-500 dark:text-blue-300" />
				</span>
				<h3 class="flex items-center text-lg font-semibold text-neutral-900 dark:text-neutral-100">
					{#if role.scope}{role.scope}{/if}
					{#if role.role}{role.role}{/if}
					{#if role.latest}
						<span
							class="ml-3 mr-2 rounded border border-transparent bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:border-blue-400/25 dark:bg-blue-500/15 dark:text-blue-200"
						>
							Latest
						</span>
					{/if}
				</h3>
				<time class="text-sm font-normal leading-none text-neutral-500 dark:text-neutral-400">{@html role.duration}</time>
				{#if role.description}
					<div class="mt-2 text-sm font-normal text-neutral-600 dark:text-neutral-400">
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
	{#if item.score}<p class="mb-2 font-medium text-neutral-800 dark:text-neutral-300">
			CGPA: {item.score}
		</p>{/if}
</div>
