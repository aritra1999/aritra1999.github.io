<script lang="ts">
	import { metaStore } from '$lib/store/metaStore';
	import supabase from '$lib/supabase/supa';
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
	} from 'lucide-svelte';

	let loading = false;
	let status = '';

	async function handelSubmit(e: any) {
		loading = true;
		const formData = new FormData(e.target);
		let newMessage: Record<string, string> = {};
		for (let field of formData) {
			const [key, value] = field;
			newMessage[key] = value as string;
		}

		const { data, error } = await supabase.from('MySiteContact').insert([newMessage]);
		status = error == null ? 'success' : 'error';
		loading = false;
		e.target.reset();
	}

	const menuItemClass = 'flex justify-center items-center p-2 hover:bg-slate-200 rounded-lg';
</script>

{#if $metaStore.showContactForm}
	<div class="fixed bottom-0 right-0 z-50 w-[min(600px,100vw)] shadow-lg sm:bottom-8 sm:right-8">
		<div class="flex w-full items-center justify-between bg-slate-900 px-4 py-3 text-white">
			New Message
			<button
				on:click={() => {
					$metaStore.showContactForm = false;
				}}
			>
				<X class="h-5 w-5" />
			</button>
		</div>
		<form on:submit|preventDefault={handelSubmit} class="border bg-white">
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
								on:click={() => {
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
					class="mb-2 w-full border-b border-slate-200 bg-white px-4 py-2"
					required
				/>
				<input
					name="subject"
					type="text"
					placeholder="Subject"
					class="mb-2 w-full border-b border-slate-200 bg-white px-4 py-2"
					required
				/>
				<textarea
					name="message"
					placeholder="Message"
					class="mb-2 w-full resize-none border-b border-white bg-white px-4 py-2"
					rows="6"
				/>

				<div class="flex items-center justify-between">
					<div class="ml-3 flex w-full items-center justify-between text-slate-600">
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
