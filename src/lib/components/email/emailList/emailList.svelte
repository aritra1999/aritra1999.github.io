<script lang="ts">
	import { page } from '$app/state';
	import items from '#lib/data/emailList.json';
	import { cn } from '#lib/utils.js';
	import type { Component } from 'svelte';
	import {
		BookOpen,
		Briefcase,
		FileSpreadsheet,
		FileTerminal,
		FileText,
		FolderKanban,
		GraduationCap,
		House,
		Mail,
		Newspaper,
		Paperclip,
		Trophy
	} from '@lucide/svelte';

	const itemIcons: Record<string, Component> = {
		home: House,
		projects: FolderKanban,
		papers: Newspaper,
		experience: Briefcase,
		education: GraduationCap,
		'skills-achievements': Trophy,
		bookshelf: BookOpen
	};

	const date = new Date();
	const today = `${date.getDate()} / ${new Intl.DateTimeFormat('en-US', {
		month: 'short'
	}).format(date.getMonth())}`;
</script>

<div
	class="w-full overflow-y-auto overflow-x-hidden border-r-0 bg-background md:w-[35rem] md:border-r"
>
	{#each Object.entries(items) as [key, item]}
		{@const Icon = itemIcons[key] ?? Mail}
		<div
			class={cn(
				page.url.pathname === `/${key}`
					? 'bg-blue-50 dark:bg-[#004a77] dark:text-white'
					: '',
				'border-b border-neutral-300 px-5 py-4 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800'
			)}
		>
			<a href={`/${key}`}>
				<div class="mb-2 flex justify-between">
					<div class="flex items-center">
						<Icon class="mr-2 size-4" />
						<span>{item.title}</span>
					</div>
					<div class="flex items-center space-x-2 text-xs text-neutral-500 dark:text-neutral-400">
						{#if item.attachments.length}
							<Paperclip class="size-4" />
						{/if}
						<span>{today}</span>
					</div>
				</div>
				<div class="text-sm text-neutral-400 dark:text-neutral-500">{item.content}</div>
				<div class="flex items-center font-medium">
					{#each item.attachments as attachment}
						<div
							class="mr-2 mt-2 flex items-center justify-center rounded-full border-2 border-neutral-200 px-4 py-2 text-xs text-neutral-500 hover:bg-blue-50 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-blue-950"
						>
							{#if attachment.type === 'code'}
								<FileTerminal class="mr-2 size-4  text-blue-400" />
							{:else if attachment.type === 'pdf'}
								<FileText class="mr-2 size-4 text-red-400" />
							{:else if attachment.type === 'doc'}
								<FileSpreadsheet class="mr-2 size-4" />
							{/if}
							{attachment.name}
						</div>
					{/each}
				</div>
			</a>
		</div>
	{/each}
</div>
