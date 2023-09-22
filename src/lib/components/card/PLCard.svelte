<script lang="ts">
    import { onMount } from "svelte";
    import type { PLItem } from "$lib/types/types";

    import Loading from "$lib/components/loading/Loading.svelte";
    
    export let item: PLItem;
    
    let loading = false;     
    let thumbnail: any;

    onMount(async () => {
        loading = true;
        thumbnail = (await import(`../../images/${item.thumbnail}.png`)).default;
        loading = false; 
    });

</script>
<div class="card">
    <div class="w-full h-48">
        {#if loading}
            <div class="flex items-center justify-center w-full h-48 text-slate-600">
                <Loading />
            </div>
        {:else}
            <img class="rounded-t-2xl object-cover w-full h-48" src={thumbnail} alt="loading" />
        {/if}
    </div>
    <div class="pt-6 px-6 pb-4">
        <div class="mb-2 flex items-center">
            <h3 class="flex text-xl font-bold items-center">
                {item.title}
            </h3>
            {#if item.ongoing}
                <span class="px-2 py-0.5 ml-2 bg-yellow-100 text-yellow-600 rounded-full text-xs font-medium" >Ongoing</span> 
            {:else}
                <span class="px-2 py-0.5 ml-2 bg-green-100 text-green-600 rounded-full text-xs font-medium">Finised</span> 
            {/if}
        </div>
        <p class="text-sm font-normal text-slate-600 mb-2">{item.description}</p>
        <div>
            {#each item.tags as tag}
                <div class="tag">{tag}</div>
            {/each}
        </div>   
        <div class="card-link-container">    
            {#each item.links as link}
                <div class="card-link">
                    {#if link.type === "Github"}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
                            </svg>
                        </div>
                    {:else}
                        <a href="{link.link}" target="_blank" rel="noreferrer">{link.type}</a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>                      
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>
