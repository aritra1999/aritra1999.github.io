<script>
	import { metaStore } from '$lib/store/metaStore';
</script>

<button
	on:click={() => {
		$metaStore.showContactForm = true;
		if ($metaStore.screen !== 'desktop') $metaStore.showSidebar = false;
	}}
	class="flex items-center rounded-xl border bg-cyan-100 py-4 pl-4 pr-6 font-medium text-blue-900 hover:shadow-md"
>
	<svg
		stroke="currentColor"
		fill="currentColor"
		stroke-width="0"
		viewBox="0 0 24 24"
		class="mr-4 h-6 w-6 -rotate-6 transform font-bold"
		height="1em"
		width="1em"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M4 21a1 1 0 0 0 .24 0l4-1a1 1 0 0 0 .47-.26L21 7.41a2 2 0 0 0 0-2.82L19.42 3a2 2 0 0 0-2.83 0L4.3 15.29a1.06 1.06 0 0 0-.27.47l-1 4A1 1 0 0 0 3.76 21 1 1 0 0 0 4 21zM18 4.41 19.59 6 18 7.59 16.42 6zM5.91 16.51 15 7.41 16.59 9l-9.1 9.1-2.11.52z"
		/>
	</svg>
	Contact Me
</button>
