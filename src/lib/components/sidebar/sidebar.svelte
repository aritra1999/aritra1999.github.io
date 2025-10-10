<script lang="ts">
	import Contact from '$lib/components/sidebar/contact.svelte';
	import { sidebarAppItems, sidebarSocialItems } from '$lib/data/sidebarData';
	import { metaStore } from '$lib/store/metaStore';
	import { cn } from '$lib/utils';
	import { Mail, PanelLeft } from '@lucide/svelte';

	export const toggleSidebar = () => {
		metaStore.set({ showSidebar: !$metaStore.showSidebar });
	};

	const containerResponsiveClass = $derived(
		$metaStore.showSidebar ? 'translate-x-0' : '-translate-x-full'
	);
</script>

<button onclick={toggleSidebar}>
	<PanelLeft class="mr-4 size-5 text-neutral-500" />
</button>
<section
	class={cn(
		containerResponsiveClass,
		'absolute left-0 top-20 z-30 h-[calc(100vh-6rem)] w-[19rem] px-4 transition-all duration-300 ease-in-out md:bg-transparent'
	)}
>
	<div class="h-full border bg-background px-2">
		<div class="py-4 pl-2">
			<Contact />
		</div>
		<a
			class="flex w-full items-center justify-between rounded-full bg-sky-100 px-6 py-2 text-sm font-semibold text-blue-800"
			href="/"
		>
			<div class="flex">
				<Mail class="mr-3 size-5" />
				Inbox
			</div>
			<span>6</span>
		</a>
		<div class="border-b border-neutral-300 py-2">
			{#each sidebarAppItems as sidebarAppItem}
				<a class="sidebarItem" href={sidebarAppItem.link} target="_blank" rel="noreferrer">
					<sidebarAppItem.icon class="mr-3 size-5" />
					{sidebarAppItem.name}
				</a>
			{/each}
		</div>
		<div class="border-b border-neutral-300 py-2">
			{#each sidebarSocialItems as sidebarSocialItem}
				<a class="sidebarItem" href={sidebarSocialItem.link} target="_blank" rel="noreferrer">
					<sidebarSocialItem.icon class="mr-3 size-5" />
					{sidebarSocialItem.title}
				</a>
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
	.sidebarItem {
		@apply flex w-full items-center rounded-full px-6 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-200;
	}
</style>
