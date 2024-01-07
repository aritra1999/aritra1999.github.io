<script lang="ts">
	export let data;

	let roles = ['Learning', 'Developing', 'Gaming'];
</script>

<div class="h-[72vh]">
	<div class="flex h-3/4 w-full items-center justify-center">
		<div
			class="flex h-[90%] w-[80%] flex-col-reverse items-center justify-center md:h-[50%] md:w-[90%] lg:flex-row"
		>
			<div class="flex h-full w-full items-center justify-center">
				<div class="ishtyle">
					<div class="mb-2 p-2 font-medium">Hi, I'm Aritra Mondal.</div>
					<div class="flex flex-col text-4xl font-extrabold text-neutral-800 sm:text-5xl">
						{#each roles as role}
							<div class="pb-6 pr-8">
								<h2 class="bg-background">{role}.</h2>
							</div>
						{/each}
					</div>
				</div>
			</div>
			<div class="flex h-full w-full items-center justify-center p-4 md:w-4/6">
				<img class="w-full rounded-t-[20px] rounded-bl-[20px]" src={data.gif} alt="me" />
			</div>
		</div>
	</div>
</div>
