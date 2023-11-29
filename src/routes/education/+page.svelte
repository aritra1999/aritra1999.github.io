<script>
  import AboutCard from "$lib/components/card/AboutCard.svelte";

  export let data;
</script>

<div class="px-3 lg:px-6 py-10">
  <h2 class="magical-underline text-3xl font-semibold mb-8 w-fit">
    Experience
  </h2>
  <div class="columns-lg gap-4">
    {#each data.educationList as education}
      <AboutCard item={education} />
    {/each}
  </div>
</div>
