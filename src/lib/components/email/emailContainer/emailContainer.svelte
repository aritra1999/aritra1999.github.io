<script>
	import { page } from '$app/state';
	import { metaStore } from '#lib/store/metaStore.js';
	import EmailTop from '#lib/components/email/emailTemplate/emailHeader.svelte';
	import EmailBottom from '#lib/components/email/emailTemplate/emailFooter.svelte';
	import { cn } from '#lib/utils.js';

	const { children } = $props();

	const emailBodyResponsiveClass = $derived(
		$metaStore.screen !== 'desktop' ? 'absolute left-0' : 'block'
	);
</script>

{#if $metaStore.screen === 'desktop' || page.url.pathname !== '/'}
	<div
		class={cn(
			emailBodyResponsiveClass,
			'z-50 mx-4 h-[calc(100vh-6.1rem)] w-[calc(100vw-2rem)] overflow-y-auto overflow-x-hidden border-x bg-background md:mx-0 md:border-x-0'
		)}
	>
		<EmailTop />
		<div class="pl-[5px]">
			{@render children()}
		</div>
		<EmailBottom />
	</div>
{/if}
