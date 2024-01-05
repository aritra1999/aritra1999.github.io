<script>
	import { page } from '$app/stores';
	import { metaStore } from '$lib/store/metaStore';
	import EmailTop from '$lib/components/email/emailTemplate/emailTop.svelte';
	import EmailBottom from '$lib/components/email/emailTemplate/emailBottom.svelte';
</script>

{#if $metaStore.screen === 'desktop' || $page.url.pathname !== '/'}
	<div
		class="{$metaStore.screen !== 'desktop'
			? 'absolute left-0'
			: ''} z-50 mx-2.5 h-[calc(100vh-5.5rem)] w-[calc(100vw-1rem)] overflow-y-auto overflow-x-hidden rounded-lg border-b border-l-0 border-r bg-background p-2 sm:h-[calc(100vh-5.6rem)] sm:w-fit sm:border-0 sm:border-r-0 md:m-0 md:border-0 md:border-l-0"
	>
		<EmailTop />
		<slot />
		<EmailBottom />
	</div>
{/if}
