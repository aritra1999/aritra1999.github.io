<script>
	import { metaStore } from '$lib/store/metaStore';
	import { Pencil } from 'lucide-svelte';

	const contactButtonClick = () => {
		$metaStore.showContactForm = !$metaStore.showContactForm;
		if ($metaStore.screen !== 'desktop') $metaStore.showSidebar = false;
	};
</script>

<button
	on:click={contactButtonClick}
	class="flex items-center rounded-xl border bg-cyan-100 py-4 pl-4 pr-6 font-medium text-blue-900 hover:bg-cyan-200 hover:shadow-md"
>
	<Pencil class="mr-4 h-6 w-6 font-bold" />
	Contact Me
</button>
