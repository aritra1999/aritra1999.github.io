<script lang="ts">
	import '../app.postcss';

	import EmailList from '$lib/components/email/emailList/emailList.svelte';
	import Navbar from '$lib/components/navbar/navbarContainer.svelte';
	import EmailBody from '$lib/components/email/emailBody/emailBody.svelte';
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import { metaStore } from '$lib/store/metaStore';
	import { cn } from '$lib/utils';

	let innerWidth = 0;
	$: metaStore.set({
		screen: innerWidth < 850 ? 'mobile' : 'desktop',
		showSidebar: innerWidth >= 1200,
		showContactForm: false
	});

	$: reactiveClasses = {
		outerContainerPl: $metaStore.showSidebar && $metaStore.screen === 'desktop' ? 'pl-72' : 'pl-2'
	};

	const classes = {
		outerContainer:
			'fixed h-[calc(100vh-5rem)] w-full ease-in-out transition-all duration-300 pb-2 pr-3',
		innerContainer:
			'flex h-full w-full bg-background border overflow-y-auto overflow-x-hidden rounded-lg'
	};
</script>

<svelte:window bind:innerWidth />
<div>
	<Navbar />
	<div class={cn(classes.outerContainer, reactiveClasses.outerContainerPl)}>
		<div class={cn(classes.innerContainer)}>
			<EmailList />
			<EmailBody>
				<slot />
			</EmailBody>
		</div>
	</div>
</div>
<ContactForm />
