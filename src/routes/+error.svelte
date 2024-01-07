<script>
	import { page } from '$app/stores';
</script>

<div class="my-10 flex h-[80vh] flex-col items-center justify-center">
	<h1 class="text-6xl font-bold text-neutral-700">{$page.status}</h1>
	<div>{$page.error?.message}</div>
</div>
