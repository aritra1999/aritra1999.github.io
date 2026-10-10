<script lang="ts">
	import { metaStore } from '#lib/store/metaStore.js';
	import { cn } from '#lib/utils.js';
	import {
		Link2,
		MoreVertical,
		Paperclip,
		Smile,
		SpellCheck,
		Trash,
		Image,
		X
	} from '@lucide/svelte';

	const menuItemClass = 'flex justify-center items-center p-2 hover:bg-neutral-200 rounded-lg';

	let status = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');
	let errorMessage = $state('');

	function close() {
		metaStore.set({ showContactForm: false });
		status = 'idle';
		errorMessage = '';
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (status === 'sending') return;
		status = 'sending';
		errorMessage = '';

		const form = event.currentTarget as HTMLFormElement;
		const data = Object.fromEntries(new FormData(form).entries());

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			});
			const result = (await res.json().catch(() => ({}))) as { error?: string };
			if (res.status === 429) {
				status = 'error';
				errorMessage =
					result.error ?? 'Too many messages. Please wait a few minutes and try again.';
				return;
			}
			if (!res.ok) {
				throw new Error(result.error ?? 'Failed to send');
			}
			status = 'sent';
			form.reset();
		} catch {
			status = 'error';
			errorMessage = 'Something went wrong. Please try again later.';
		}
	}
</script>

{#if $metaStore.showContactForm}
	<div class="fixed bottom-0 right-0 z-50 w-[min(600px,100vw)] shadow-lg sm:bottom-8 sm:right-8">
		<div class="flex w-full items-center justify-between bg-neutral-900 px-4 py-3 text-white">
			New Message
			<button
				onclick={close}
			>
				<X class="h-5 w-5" />
			</button>
		</div>
		<form class="border bg-white" onsubmit={handleSubmit}>
			<div class="rounded-b-lg p-4">
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
					maxlength="120"
					class="mb-2 w-full border-b border-neutral-200 bg-white px-4 py-2"
					required
				/>
				<textarea
					name="message"
					placeholder="Message"
					maxlength="1500"
					class="mb-2 w-full resize-none border-b border-white bg-white px-4 py-2"
					rows="6"
					required
				></textarea>
				<input
					name="company"
					type="text"
					tabindex="-1"
					autocomplete="off"
					aria-hidden="true"
					class="hidden"
				/>

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
							class="flex items-center rounded-lg bg-blue-600 px-6 py-2 font-medium text-white shadow-lg disabled:opacity-60"
							type="submit"
							disabled={status === 'sending'}
						>
							{status === 'sending' ? 'Sending…' : 'Send'}
						</button>
					</div>
				</div>
				{#if status === 'sent'}
					<p class="mt-2 px-4 text-sm font-medium text-green-700">
						Message sent! I'll get back to you soon.
					</p>
				{:else if status === 'error'}
					<p class="mt-2 px-4 text-sm font-medium text-red-600">{errorMessage}</p>
				{/if}
			</div>
		</form>
	</div>
{/if}
