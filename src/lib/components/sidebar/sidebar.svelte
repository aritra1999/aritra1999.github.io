<script lang="ts">
	import Contact from '$lib/components/sidebar/contact.svelte';
	import sideBarContent from '$lib/data/sidebarData.json';
	import { metaStore } from '$lib/store/metaStore';
	import { GanttChart, Pencil } from 'lucide-svelte';

	const sidebarItems = sideBarContent.sidebarItems;
	const sidebarSocialItems = sideBarContent.sidebarSocialItems;

	export const toggleSidebar = () => {
		$metaStore.showSidebar = !$metaStore.showSidebar;
	};
</script>

<button on:click={toggleSidebar}>
	<GanttChart class="mr-4 h-5 w-5 text-slate-500" />
</button>

<div
	class="absolute left-0 top-[5rem] z-30 h-[calc(100vh-5rem)] w-72 px-2 pb-2 transition-all duration-300 ease-in-out md:bg-transparent {$metaStore.showSidebar
		? 'translate-x-0'
		: '-translate-x-full'}"
>
	<div class="h-full rounded-lg border bg-background px-2">
		<div class="py-4 pl-2">
			<Contact />
		</div>
		<div
			class="flex w-full items-center justify-between rounded-full bg-sky-100 px-6 py-2 text-sm font-semibold text-blue-800"
		>
			<div class="flex">
				<Pencil class="mr-3 h-5 w-5" />
				Inbox
			</div>
			<div>6</div>
		</div>
		{#each sidebarItems as sidebarItem}
			<div
				class="flex w-full items-center rounded-full px-6 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
			>
				<svg
					stroke="currentColor"
					fill="currentColor"
					stroke-width="0"
					viewBox="0 0 24 24"
					class="mr-3 h-5 w-5"
					xmlns="http://www.w3.org/2000/svg"
				>
					{@html sidebarItem.icon}
				</svg>
				{sidebarItem.name}
			</div>
		{/each}
		<hr class="m-2" />
		{#each sidebarSocialItems as sidebarSocialItem}
			<a href={sidebarSocialItem.link} target="_blank" rel="noreferrer">
				<div
					class="flex w-full items-center rounded-r-full px-6 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						class="mr-3 h-5 w-5"
						width="32"
						height="32"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 24 24"
					>
						{@html sidebarSocialItem.icon}
					</svg>
					{sidebarSocialItem.title}
				</div>
			</a>
		{/each}
		<hr class="m-2" />
	</div>
</div>
