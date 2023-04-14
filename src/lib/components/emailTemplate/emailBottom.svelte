<script>
	import { page } from "$app/stores";
    const options = [
        {
            title: "Forward",
            icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />',
        },
        {
            title: "Reply",
            icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />',
        },
        {
            title: "Report",
            icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />',
        }
    ]
</script>

{#if $page.url.pathname !== '/'}
    <div class="flex justify-between sm:justify-end p-4 space-x-4 border-t border-zinc-200 font-medium">
        {#each options as option}
            <button class="flex items-center px-3 py-2 sm:px-4 sm:py-2 text-sm rounded-lg border border-zinc-300 text-zinc-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white">                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3 mr-2 mb-1">
                    {@html option.icon}
                </svg>                 
                <div>{option.title}</div> 
            </button>
        {/each}
    </div>
{/if}

  