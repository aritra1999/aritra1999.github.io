<script>
	import { page } from '$app/state';
</script>

<div class="my-10 flex h-[80vh] flex-col items-center justify-center">
	<h1 class="text-6xl font-bold text-neutral-700 dark:text-neutral-300">{page.status}</h1>
	<div>{page.error?.message}</div>
</div>
