<script>
    import AboutCard from "$lib/components/card/AboutCard.svelte";
    import items from "$lib/data/about.json";

    const educationList = items.education;

</script>
<div class="px-3 lg:px-6 py-10">
    <div class="my-4">
        <span class="magical-underline text-3xl font-bold">
            Education
        </span>
        <div class="columns-lg gap-4">
            {#each educationList as education}
                <AboutCard item={education} />
            {/each}
        </div>
    </div>                
</div>