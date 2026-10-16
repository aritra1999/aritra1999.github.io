<script lang="ts">
	import { themeStore } from '#lib/store/themeStore.js';
	import { Moon, Sun } from '@lucide/svelte';

	const { containerClass = 'icon-container' }: { containerClass?: string } = $props();
</script>

<button
	onclick={() => themeStore.toggle()}
	aria-label="Toggle dark theme"
	title="Toggle dark theme"
	class={containerClass}
>
	{#if $themeStore === 'dark'}
		<Sun class="h-5 w-5" />
	{:else}
		<Moon class="h-5 w-5" />
	{/if}
</button>
