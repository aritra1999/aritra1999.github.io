<script lang="ts">
	export let data;
</script>

<div class="-mt-6 flex h-[65vh] w-full flex-col-reverse sm:h-[80vh] xl:flex-row">
	<div class="flex h-1/2 w-full items-center justify-center sm:h-full lg:w-1/2">
		<div class="px-10">
			<div class="mb-2">Hi, I'm Aritra Mondal.</div>
			<div class="flex flex-col space-y-4 text-5xl font-extrabold text-neutral-800 sm:text-7xl">
				<span class="magical-underline w-fit">Developer. </span>
				<span class="magical-underline w-fit">Designer. </span>
				<span class="magical-underline w-fit">Gamer. </span>
			</div>
		</div>
	</div>
	<div class="mt-10 w-full px-6 sm:mb-auto sm:mt-auto sm:p-0 md:px-10 xl:w-1/2 xl:px-16">
		<img class="mx-auto max-h-[300px] rounded-t-[30px] rounded-bl-[30px]" src={data.gif} alt="me" />
	</div>
</div>
