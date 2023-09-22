<script lang="ts">
    import papers from "$lib/data/papers.json";
    import PLCard from "$lib/components/card/PLCard.svelte";
</script>

<div class="px-3 lg:px-6 py-10">
    <h2 class="magical-underline text-3xl font-semibold mb-8 w-fit">
        Blogs & Papers
    </h2>
    <div class="gap-4 columns-sm">
        {#each papers as paper}
            <div class="inline-block w-full">
                <PLCard item={paper} />
            </div>
        {/each}
    </div>
</div>



