<script lang="ts">
	import '../app.postcss';

	import { metaStore } from '$lib/store/metaStore';
	import { cn } from '$lib/utils';
	import Navbar from '$lib/components/navbar/navbarContainer.svelte';
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import EmailList from '$lib/components/email/emailList/emailList.svelte';
	import EmailBody from '$lib/components/email/emailBody/emailBody.svelte';

	let innerWidth = 0;
	$: metaStore.set({
		screen: innerWidth < 768 ? 'mobile' : 'desktop',
		showSidebar: innerWidth >= 1280,
		showContactForm: false
	});

	$: reactiveClasses = {
		outerContainerPl: $metaStore.showSidebar && $metaStore.screen === 'desktop' ? 'pl-72' : 'pl-2'
	};
</script>

<svelte:window bind:innerWidth />

<Navbar />
<section
	class={cn(
		reactiveClasses.outerContainerPl,
		'fixed h-[calc(100vh-5rem)] w-full pb-2 pr-3 transition-all duration-300 ease-in-out'
	)}
>
	<div class="flex h-full w-full overflow-y-auto overflow-x-hidden rounded-lg border bg-background">
		<EmailList />
		<EmailBody>
			<slot />
		</EmailBody>
	</div>
</section>

<ContactForm />
