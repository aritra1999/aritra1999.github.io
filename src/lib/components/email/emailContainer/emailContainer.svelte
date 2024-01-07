<script>
	import { page } from '$app/stores';
	import { metaStore } from '$lib/store/metaStore';
	import EmailTop from '$lib/components/email/emailTemplate/emailHeader.svelte';
	import EmailBottom from '$lib/components/email/emailTemplate/emailFooter.svelte';
	import { cn } from '$lib/utils';

	$: emailBodyResponsiveClass = $metaStore.screen !== 'desktop' ? 'absolute left-0' : 'block';
</script>

{#if $metaStore.screen === 'desktop' || $page.url.pathname !== '/'}
	<div
		class={cn(
			emailBodyResponsiveClass,
			'z-50 mx-4 h-[calc(100vh-6.1rem)] w-[calc(100vw-2rem)] overflow-y-auto overflow-x-hidden border-x bg-background md:mx-0 md:border-x-0'
		)}
	>
		<EmailTop />
		<div class="pl-1">
			<slot />
		</div>
		<EmailBottom />
	</div>
{/if}
