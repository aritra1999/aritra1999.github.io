<script lang="ts">
	import { goto } from '$app/navigation';
	import { Search } from '@lucide/svelte';
	import { searchSite, sectionIcons, type SearchItem } from '#lib/data/searchIndex.js';

	const { variant = 'desktop' }: { variant?: 'desktop' | 'mobile' } = $props();

	let query = $state('');
	let open = $state(false);
	let root = $state<HTMLDivElement>();
	let input = $state<HTMLInputElement>();

	const results = $derived(searchSite(query));

	function close() {
		open = false;
	}

	function select(item: SearchItem) {
		close();
		query = '';
		input?.blur();
		goto(item.href);
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			close();
			input?.blur();
		} else if (event.key === 'Enter' && results.length > 0) {
			select(results[0]);
		}
	}

	function onDocumentClick(event: MouseEvent) {
		if (root && !root.contains(event.target as Node)) close();
	}
</script>

<svelte:document onclick={onDocumentClick} />

<div bind:this={root} class="relative w-full">
	{#if variant === 'desktop'}
		<div class="navbar-search-container">
			<input
				bind:this={input}
				type="search"
				name="search"
				placeholder="Search all conversations"
				aria-label="Search projects, experience, education and blogs"
				autocomplete="off"
				class="mx-2 w-full bg-transparent p-1"
				bind:value={query}
				onfocus={() => (open = true)}
				oninput={() => (open = true)}
				onkeydown={onKeydown}
			/>
			<Search class="h-5 w-5 shrink-0 text-neutral-900 dark:text-neutral-100" />
		</div>
	{:else}
		<input
			bind:this={input}
			type="search"
			name="search"
			placeholder="Search all conversations"
			aria-label="Search projects, experience, education and blogs"
			autocomplete="off"
			class="w-full bg-transparent p-1"
			bind:value={query}
			onfocus={() => (open = true)}
			oninput={() => (open = true)}
			onkeydown={onKeydown}
		/>
	{/if}

	{#if open && query.trim()}
		<div
			class="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-lg border bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
		>
			{#if results.length === 0}
				<div class="px-4 py-3 text-sm text-neutral-500 dark:text-neutral-400">
					No results for “{query.trim()}”
				</div>
			{:else}
				{#each results as item}
					{@const Icon = sectionIcons[item.section] ?? Search}
					<button
						class="flex w-full items-center gap-3 px-4 py-2.5 text-left hover:bg-neutral-100 dark:hover:bg-neutral-800"
						onmousedown={(event) => event.preventDefault()}
						onclick={() => select(item)}
					>
						<Icon class="size-4 shrink-0 text-neutral-500 dark:text-neutral-400" />
						<span class="min-w-0 flex-1">
							<span class="block truncate text-sm font-semibold text-neutral-900 dark:text-neutral-100">
								{item.title}
							</span>
							{#if item.detail}
								<span class="block truncate text-xs text-neutral-500 dark:text-neutral-400">{item.detail}</span>
							{/if}
						</span>
						<span
							class="shrink-0 rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-300"
						>
							{item.section}
						</span>
					</button>
				{/each}
			{/if}
		</div>
	{/if}
</div>
