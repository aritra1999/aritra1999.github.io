<script lang="ts">
	import { page } from '$app/stores';
	import items from '$lib/data/emailList.json';
	import { metaStore } from '$lib/store/metaStore';
	import { cn } from '$lib/utils';
	import { FileSpreadsheet, FileTerminal, FileText, Paperclip } from 'lucide-svelte';

	const date = new Date();
	const today = `${date.getDate()} / ${new Intl.DateTimeFormat('en-US', {
		month: 'short'
	}).format(date.getMonth())}`;
	let emailListW = $metaStore.screen === 'desktop' ? 'border-r w-[40rem]' : 'w-fit';
</script>

<div class={cn(emailListW, 'overflow-y-auto border-r-0 bg-background md:border-r')}>
	{#each Object.entries(items) as [key, item]}
		<div
			class="border-b border-neutral-300 px-5 py-4 text-neutral-700 hover:bg-neutral-100
      {$page.url.pathname === `/${key}` ? 'bg-white' : ''}"
		>
			<a href={`/${key}`}>
				<div class="mb-2 flex justify-between">
					<div class="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							width="32"
							height="32"
							preserveAspectRatio="xMidYMid meet"
							viewBox="0 0 24 24"
							class="mr-2 h-5 w-5"
							><path
								fill="currentColor"
								d="M6.5 17H15l3.5-5L15 7H6.5l3.5 5l-3.5 5m8.5 2H3l4.5-7L3 5h12c.69 0 1.23.3 1.64.86L21 12l-4.36 6.14c-.41.56-.95.86-1.64.86Z"
							/></svg
						>
						<span>{item.title}</span>
					</div>
					<div class="flex items-center space-x-2 text-xs text-neutral-500">
						{#if item.attachments.length}
							<Paperclip class="h-5 w-5" />
						{/if}
						<span>{today}</span>
					</div>
				</div>
				<div class="text-sm text-neutral-400">{item.content}</div>
				<div class="flex items-center font-medium">
					{#each item.attachments as attachment}
						<div
							class="mr-2 mt-2 flex items-center justify-center rounded-full border-2 border-neutral-200 px-4 py-2 text-xs text-neutral-500 hover:bg-blue-50"
						>
							{#if attachment.type === 'code'}
								<FileTerminal class="mr-2 h-5 w-5  text-blue-400" />
							{:else if attachment.type === 'pdf'}
								<FileText class="mr-2 h-5 w-5 text-red-400" />
							{:else if attachment.type === 'doc'}
								<FileSpreadsheet class="mr-2 h-5 w-5" />
							{/if}
							{attachment.name}
						</div>
					{/each}
				</div>
			</a>
		</div>
	{/each}
</div>
