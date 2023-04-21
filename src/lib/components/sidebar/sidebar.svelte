<script lang="ts">
    import Contact from "$lib/components/sidebar/contact.svelte";
    import sideBarContent from "$lib/data/sidebarData.json";
    import { metaStore } from "$lib/store/metaStore";
    
    const sidebarItems = sideBarContent.sidebarItems;
    const sidebarSocialItems = sideBarContent.sidebarSocialItems;
    
</script>

<button on:click={() => {$metaStore.showSidebar = !$metaStore.showSidebar}}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
    </svg>
</button>

<div class="h-[calc(100vh-5rem)]  bg-white md:bg-transparent px-2 pb-3 w-72 absolute ease-in-out transition-all duration-300 z-30 left-0 top-[5rem] {$metaStore.showSidebar ? 'translate-x-0' : '-translate-x-full'}  border-r-4 md:border-r-0 border-blue-50">
    <div class="bg-white h-full px-2 rounded-xl">
        <div class="py-4">
            <Contact />
        </div>
        <div class="w-full flex items-center justify-between bg-sky-100 text-blue-800 rounded-full py-2 text-sm px-6 font-semibold">
            <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-5 h-5 mr-3" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z"></path>
                </svg>
                Inbox
            </div>
            <div>6</div>
        </div>
        {#each sidebarItems as sidebarItem}
            <div class="w-full flex items-center hover:bg-slate-100  text-slate-700 rounded-full py-2 text-sm px-6 font-medium">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg">
                    {@html sidebarItem.icon}
                </svg>
                {sidebarItem.name}
            </div>
        {/each}
        <hr class="m-2">
        {#each sidebarSocialItems as sidebarSocialItem}
            <a href={sidebarSocialItem.link} target="_blank" rel="noreferrer">
                <div class="w-full flex items-center hover:bg-slate-100  text-slate-700 rounded-r-full py-2 text-sm px-6 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-5 w-5 mr-3" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        {@html sidebarSocialItem.icon}
                    </svg>
                    {sidebarSocialItem.title}
                </div>
            </a>
        {/each}
        <hr class="ml-2">
    </div>
</div>


