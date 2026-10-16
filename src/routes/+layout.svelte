<script lang="ts">
	import '../app.postcss';

	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { metaStore } from '#lib/store/metaStore.js';
	import { themeStore } from '#lib/store/themeStore.js';
	import { cn } from '#lib/utils.js';
	import Navbar from '#lib/components/navbar/navbarContainer.svelte';
	import ContactForm from '#lib/components/contact/ContactForm.svelte';
	import EmailList from '#lib/components/email/emailList/emailList.svelte';
	import EmailContainer from '#lib/components/email/emailContainer/emailContainer.svelte';
	import sectionTitles from '#lib/data/emailList.json';

	const { children } = $props();

	let innerWidth = $state(0);

	onMount(() => {
		themeStore.sync();
	});

	$effect(() => {
		metaStore.set({
			screen: innerWidth < 768 ? 'mobile' : 'desktop',
			showSidebar: innerWidth >= 1280,
			showContactForm: false
		});
	});

	const reactiveClasses = $derived({
		outerContainerPl:
			$metaStore.showSidebar && $metaStore.screen === 'desktop' ? 'pl-[19rem]' : 'pl-4'
	});

	const sectionKey = $derived(page.url.pathname.replaceAll('/', '') || 'home');
	const sectionTitle = $derived(
		page.error
			? `Error ${page.status}`
			: ((sectionTitles as Record<string, { title: string }>)[sectionKey]?.title ?? 'Home')
	);
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>{sectionTitle} · Aritra Mondal</title>
</svelte:head>

<Navbar />
<section
	class={cn(
		reactiveClasses.outerContainerPl,
		'fixed h-[calc(100vh-5rem)] w-full pb-4 pr-4 transition-all duration-300 ease-in-out'
	)}
>
	<div class="flex h-full w-full overflow-hidden border bg-background">
		<EmailList />
		<EmailContainer>
			{@render children()}
		</EmailContainer>
	</div>
</section>

<ContactForm />
