<script lang="ts">
	import { metaStore } from '$lib/store/metaStore';
	import { page } from '$app/stores';
	import EmailTopIcons from './emailTopIcons.svelte';
	import emails from '$lib/data/emailList.json';

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
						<div class="ml-4 rounded-md bg-slate-900 px-2 py-1 text-xs text-slate-200">Inbox</div>
					</div>
					<EmailTopIcons />
				</div>
				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<div
							class="mr-6 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-slate-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="h-5 w-5"
								width="32"
								height="32"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 256 256"
								><path
									fill="currentColor"
									d="M231.9 212a120.7 120.7 0 0 0-67.1-54.2a72 72 0 1 0-73.6 0A120.7 120.7 0 0 0 24.1 212a8 8 0 1 0 13.8 8a104.1 104.1 0 0 1 180.2 0a8 8 0 1 0 13.8-8ZM72 96a56 56 0 1 1 56 56a56 56 0 0 1-56-56Z"
								/></svg
							>
						</div>
						<div class="text-xs">
							<div>
								Aritra Mondal - <span class="text-slate-500"> aritra041999@gmail.com </span>
							</div>
							To Me
						</div>
					</div>
					<div class="flex items-center justify-around space-x-1 text-zinc-700">
						<div class="text-xs text-slate-600">Thursday, November 4, 3:18 PM</div>
					</div>
				</div>
			</div>
		{:else}
			<div class="borer-slate-200 flex justify-between border-b px-2 py-2">
				<a href="/" class="flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="mr-2 h-5 w-5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
						/>
					</svg>
					Back
				</a>
				<EmailTopIcons />
			</div>
			<div class="mx-4 px-2 py-4">
				<div class="flex items-center">
					<h3 class="text-lg">Welcome to the page.</h3>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						class="ml-4 h-5 w-5"
						width="32"
						height="32"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M6.5 17H15l3.5-5L15 7H6.5l3.5 5l-3.5 5m8.5 2H3l4.5-7L3 5h12c.69 0 1.23.3 1.64.86L21 12l-4.36 6.14c-.41.56-.95.86-1.64.86Z"
						/></svg
					>
					<div class="ml-4 rounded-md bg-slate-200 px-2 py-1 text-xs">Inbox</div>
				</div>
				<div class="mt-2 flex items-center">
					<div
						class="mr-6 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-slate-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							class="h-5 w-5"
							width="32"
							height="32"
							preserveAspectRatio="xMidYMid meet"
							viewBox="0 0 256 256"
							><path
								fill="currentColor"
								d="M231.9 212a120.7 120.7 0 0 0-67.1-54.2a72 72 0 1 0-73.6 0A120.7 120.7 0 0 0 24.1 212a8 8 0 1 0 13.8 8a104.1 104.1 0 0 1 180.2 0a8 8 0 1 0 13.8-8ZM72 96a56 56 0 1 1 56 56a56 56 0 0 1-56-56Z"
							/></svg
						>
					</div>
					<div class="text-xs">
						<div>
							Aritra Mondal - <span class="text-slate-500"> aritra041999@gmail.com </span>
						</div>
						To Me -<span class="text-xs text-slate-600">Thursday, Nov 19, 3:18 PM</span>
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
