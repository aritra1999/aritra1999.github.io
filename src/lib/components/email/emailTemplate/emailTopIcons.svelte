<script>
  import { Printer, Reply, Star } from "lucide-svelte";
  const icons = [Printer, Reply, Star];
</script>

<div class="flex items-center justify-center text-zinc-900 sapce-x-4">
  {#each icons as icon}
    <div class="p-3 bg-background hover:bg-zinc-100">
      <svelte:component this={icon} class="w-5 h-5" />
    </div>
  {/each}
</div>
