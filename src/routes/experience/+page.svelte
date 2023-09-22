<script lang="ts">
  import AboutCard from "$lib/components/card/AboutCard.svelte";

  export let data; 
</script>

<div class="px-3 lg:px-6 py-10">
  <div class="my-4">
    <span class="magical-underline text-3xl font-semibold mb-4">
      Experience
    </span>
    <div class="columns-lg gap-4">
      {#each data.experiences as experience}
        <AboutCard item={experience} />
      {/each}
    </div>
  </div>
</div>
