<script>
    import AboutCard from "$lib/components/card/AboutCard.svelte";
    import items from "$lib/data/about.json";

    const experiences = items.experience;

</script>
<div class="px-3 lg:px-6 py-10">
    <div class="my-4">
        <span class="magical-underline text-3xl font-semibold mb-4">
            Experience
        </span>
        <div class="columns-lg gap-4">
            {#each experiences as experience}
                <AboutCard  item={experience}/>
            {/each}
        </div>
    </div>
</div>