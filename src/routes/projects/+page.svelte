<script lang="ts">
    import projects from "$lib/data/projects.json";
    import PLCard from "$lib/components/card/PLCard.svelte";
    import { metaStore } from "$lib/store/metaStore";
</script>

<div class="px-3 lg:px-6 py-10">
    <h2 class="magical-underline text-3xl font-semibold mb-8 w-fit">
        Projects
    </h2>
    <div class="columns-1 {$metaStore.showSidebar ? 'md:columns-1 xl:columns-2 2xl:columns-3':'md:columns-2 xl:columns-3 2xl:columns-4' } gap-4">
        {#each projects as project}
            <div class="inline-block w-full">
                <PLCard item={project} />
            </div>
        {/each}
    </div>
</div>
