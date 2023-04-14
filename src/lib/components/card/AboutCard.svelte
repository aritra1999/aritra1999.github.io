<script lang="ts">
	import { onMount } from "svelte";


    export let item: any;
    let thumbnail: any;
    onMount(async () => {
        thumbnail = (await import(`../../images/${item.logo}.png`)).default;
    })
</script>

<div class="card p-8">
    <div class="text-lg font-bold flex items-center mb-6">
        <img class="h-8 rounded-md" src={thumbnail} alt="{item.name}"/>
        <h3 class="pl-4 ml-4 border-l-2 border-slate-300 text-xl font-bold ">{item.name}</h3>
    </div>
    <ol class="mx-4 relative border-l border-gray-200">                  
        {#each item.roles as role}
            <li class="mb-4 ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>
                <h3 class="flex items-center text-lg font-semibold text-gray-900">    
                    {#if role.scope}{role.scope}{/if} 
                    {#if role.role}{role.role}{/if}
                    {#if role.latest}<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Latest</span>{/if}
                </h3>
                <time class="text-sm font-normal leading-none text-zinc-600">{@html role.duration}</time>
                {#if role.description}
                    <div class="mt-2 text-sm font-normal text-gray-700">
                        {#each role.description as des}
                            <ul class="pl-6 list-disc list-outside">
                                <li>{des}</li>
                            </ul>
                        {/each}
                    </div>
                {/if}
            </li>
        {/each}
    </ol>
    {#if item.technologies}
        <div class="px-2 pt-4 mr-4">    
            {#each item.technologies as tech}
                <div class="tag">{tech}</div>
            {/each}
        </div>
    {/if}
    {#if item.score}<p class="font-medium text-slate-800 mb-2" >CGPA: {item.score}</p>{/if}
    <div class="card-link-container">    
        <div class="flex items-center text-blue-600 font-medium text-sm space-x-1">
            <a href="{item.url}" target="_blank" rel="noreferrer">Show more</a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>                      
        </div>
    </div>
</div>