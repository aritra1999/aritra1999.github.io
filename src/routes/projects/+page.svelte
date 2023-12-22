<script lang="ts">
  import PLCard from "$lib/components/card/PLCard.svelte";

  export let data;
</script>

<div class="px-3 lg:px-6 py-10">
  <div class="gap-4 columns-sm">
    {#each data.projects as project}
      <div class="inline-block w-full">
        <PLCard item={project} />
      </div>
    {/each}
  </div>
</div>
