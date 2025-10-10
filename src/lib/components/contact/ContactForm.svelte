<script lang="ts">
	import { metaStore } from '$lib/store/metaStore';
	import { cn } from '$lib/utils';
	import {
		Link2,
		Loader,
		MoreVertical,
		Paperclip,
		Smile,
		SpellCheck,
		Trash,
		Image,
		Info,
		X
	} from '@lucide/svelte';

	let loading = $state(false);
	let status = $state('');

	const menuItemClass = 'flex justify-center items-center p-2 hover:bg-neutral-200 rounded-lg';
</script>

{#if $metaStore.showContactForm}
	<div class="fixed bottom-0 right-0 z-50 w-[min(600px,100vw)] shadow-lg sm:bottom-8 sm:right-8">
		<div class="flex w-full items-center justify-between bg-neutral-900 px-4 py-3 text-white">
			New Message
			<button
				onclick={() => {
					metaStore.set({ showContactForm: false });
				}}
			>
				<X class="h-5 w-5" />
			</button>
		</div>
		<form class="border bg-white">
			<div class="rounded-b-lg p-4">
				{#if status === 'success' || status === 'error'}
					<div class="my-2">
						<div
							class="flex items-center border p-4 {status === 'success'
								? 'bg-green-50 text-green-800'
								: 'bg-red-50 text-red-800'} rounded-lg"
						>
							<Info class="h-5 w-5" />
							<div class="mx-2">
								{#if status === 'success'}
									Successfully sent message :)
								{:else if status === 'error'}
									Something went wrong :(
								{/if}
							</div>
							<button
								type="button"
								class="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2"
								aria-label="Close"
								onclick={() => {
									status = '';
								}}
							>
								<span class="sr-only">Close</span>
								<X class="h-5 w-5" />
							</button>
						</div>
					</div>
				{/if}

				<input
					name="from"
					type="email"
					placeholder="From"
					class="mb-2 w-full border-b border-neutral-200 bg-white px-4 py-2"
					required
				/>
				<input
					name="subject"
					type="text"
					placeholder="Subject"
					class="mb-2 w-full border-b border-neutral-200 bg-white px-4 py-2"
					required
				/>
				<textarea
					name="message"
					placeholder="Message"
					class="mb-2 w-full resize-none border-b border-white bg-white px-4 py-2"
					rows="6"
				></textarea>

				<div class="flex items-center justify-between">
					<div class="ml-3 flex w-full items-center justify-between text-neutral-600">
						{#if $metaStore.screen !== 'mobile'}
							<div class="flex items-center justify-center space-x-2">
								<div class={cn(menuItemClass)}>
									<SpellCheck class="h-5 w-5" />
								</div>
								<div class={cn(menuItemClass)}>
									<Paperclip class="h-5 w-5" />
								</div>
								<div class={cn(menuItemClass)}>
									<Link2 class="h-5 w-5" />
								</div>
								<div class={cn(menuItemClass)}>
									<Smile class="h-5 w-5" />
								</div>
								<div class={cn(menuItemClass)}>
									<Image class="h-5 w-5" />
								</div>
							</div>
						{/if}
						<div class="ml-auto mr-2 flex items-center justify-center space-x-2">
							<div class={cn(menuItemClass)}>
								<Trash class="h-5 w-5" />
							</div>
							<div class={cn(menuItemClass)}>
								<MoreVertical class="h-5 w-5" />
							</div>
						</div>
						<button
							class="flex items-center rounded-lg bg-blue-600 px-6 py-2 font-medium text-white shadow-lg"
							type="submit"
							disabled={true}
						>
							{#if loading}
								<Loader class="mr-3 h-4 w-4 animate-spin text-white" />
							{:else}
								Send
							{/if}
						</button>
					</div>
				</div>
			</div>
		</form>
	</div>
{/if}
