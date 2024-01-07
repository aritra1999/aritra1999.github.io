<script lang="ts">
	import { metaStore } from '$lib/store/metaStore';
	import { page } from '$app/stores';
	import EmailTopIcons from './emailTopIcons.svelte';
	import emails from '$lib/data/emailList.json';
	import { ArrowLeft, User } from 'lucide-svelte';

	function getPageName(url: string): string {
		url = url.replaceAll('/', '');
		const pageName = emails[url as keyof typeof emails]?.title ?? '';
		return pageName;
	}

	$: pageName = getPageName($page.url.pathname);
</script>

<div>
	{#if $page.url.pathname !== '/'}
		{#if $metaStore.screen === 'desktop'}
			<div class="px-6 py-4">
				<div class="ishtyle mb-2 flex items-center justify-between pb-3">
					<div class="flex items-center">
						<h2 class="w-fit bg-background px-3 py-1 text-3xl font-semibold">
							{pageName}
						</h2>
						<div class="ml-4 rounded-md bg-neutral-900 px-2 py-1 text-xs text-neutral-200">
							Inbox
						</div>
					</div>
					<EmailTopIcons />
				</div>
				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<div
							class="mr-6 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-300"
						>
							<User class="h-5 w-5" />
						</div>
						<div class="text-xs">
							<div>
								Aritra Mondal - <span class="text-neutral-500"> aritra041999@gmail.com </span>
							</div>
							To Me
						</div>
					</div>
					<div class="flex items-center justify-around space-x-1 text-neutral-700">
						<div class="text-xs text-neutral-600">Thursday, November 4, 3:18 PM</div>
					</div>
				</div>
			</div>
		{:else}
			<div class="borer-neutral-200 flex justify-between border-b px-2 py-2">
				<a href="/" class="flex items-center justify-center">
					<ArrowLeft class="mx-2 h-4 w-4" />
					Back
				</a>
				<EmailTopIcons />
			</div>
			<div class="mx-4 px-2 py-4">
				<div class="ishtyle flex items-center pb-3">
					<div class="w-fit bg-background px-3 py-1 text-xl font-semibold">{pageName}</div>
					<div class="ml-4 mr-2 rounded-md bg-neutral-900 px-2 py-1 text-xs text-neutral-200">
						Inbox
					</div>
				</div>
				<div class="mt-2 flex items-center">
					<div
						class="mr-6 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-300"
					>
						<User class="h-5 w-5" />
					</div>
					<div class="text-xs text-neutral-600">
						<div><span class="text-neutral-900">Aritra Mondal </span> - aritra041999@gmail.com</div>
						To Me -<span class="text-xs">Thursday, Nov 19, 3:18 PM</span>
					</div>
				</div>
			</div>
		{/if}
	{/if}
</div>

<style>
	.ishtyle {
		background: repeating-linear-gradient(
			135deg,
			transparent,
			transparent 3px,
			#c6c6c6 6px,
			#c6c6c6 4px
		);
	}
</style>
