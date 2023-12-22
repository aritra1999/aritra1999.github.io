<script>
  import { page } from "$app/stores";
</script>

<div class="flex flex-col items-center justify-center my-10 h-[80vh]">
  <h1 class="font-bold text-6xl text-zinc-700">{$page.status}</h1>
  <div>{$page.error?.message}</div>
</div>
