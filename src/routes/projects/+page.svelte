<script lang="ts">
    import projects from "$lib/data/projects.json";
    import PLCard from "$lib/components/card/PLCard.svelte";
</script>

<div class="px-3 lg:px-6 py-10">
    <h2 class="magical-underline text-3xl font-semibold mb-8 w-fit">
        Projects
    </h2>
    <div class="gap-4 columns-sm">
        {#each projects as project}
            <div class="inline-block w-full">
                <PLCard item={project} />
            </div>
        {/each}
    </div>
</div>
