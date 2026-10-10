<script lang="ts">
	import { BookOpen, MoveRight, Rss } from '@lucide/svelte';

	const { data } = $props();
</script>

<div class="px-3 py-10 lg:px-6">
	<div class="mb-2 flex items-center">
		<BookOpen class="mr-2 size-5 text-neutral-700" />
		<h2 class="text-2xl font-semibold">Bookshelf</h2>
	</div>
	<p class="mb-6 text-sm text-neutral-500">
		Engineering books that shaped how I think about building software.
	</p>
	<div class="columns-sm gap-4">
		{#each data.books as book}
			<div class="card border p-6">
				<h3 class="mb-1 text-lg font-bold">{book.title}</h3>
				<div class="mb-2 text-sm font-medium text-neutral-500">by {book.author}</div>
				<p class="mb-4 text-sm font-normal text-neutral-800">{book.description}</p>
				<a
					href={book.link}
					target="_blank"
					rel="noreferrer"
					class="card-link"
				>
					Read more
					<MoveRight class="ml-2 h-4 w-4" />
				</a>
			</div>
		{/each}
	</div>
</div>

<div class="px-3 py-6 lg:px-6">
	<div class="mb-2 flex items-center">
		<Rss class="mr-2 size-5 text-neutral-700" />
		<h2 class="text-2xl font-semibold">Blogs I follow</h2>
	</div>
	<p class="mb-4 text-sm text-neutral-500">Technical blogs worth your RSS reader.</p>
	<div class="overflow-hidden border bg-white">
		{#each data.blogs as blog}
			<a
				href={blog.link}
				target="_blank"
				rel="noreferrer"
				class="group flex items-center justify-between border-b border-neutral-200 px-5 py-4 last:border-b-0 hover:bg-neutral-100"
			>
				<div class="min-w-0">
					<div class="flex items-center">
						<span class="truncate font-semibold text-neutral-900">{blog.title}</span>
						<span class="ml-2 shrink-0 text-xs text-neutral-400">{blog.author}</span>
					</div>
					<div class="truncate text-sm text-neutral-500">{blog.description}</div>
				</div>
				<MoveRight
					class="ml-4 size-4 shrink-0 text-neutral-400 group-hover:text-blue-600"
				/>
			</a>
		{/each}
	</div>
</div>
