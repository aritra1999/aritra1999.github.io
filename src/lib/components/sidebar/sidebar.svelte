<script lang="ts">
  import Contact from "$lib/components/sidebar/contact.svelte";
  import sideBarContent from "$lib/data/sidebarData.json";
  import { metaStore } from "$lib/store/metaStore";
  import { GanttChart, Pencil } from "lucide-svelte";

  const sidebarItems = sideBarContent.sidebarItems;
  const sidebarSocialItems = sideBarContent.sidebarSocialItems;

  export const toggleSidebar = () => {
    $metaStore.showSidebar = !$metaStore.showSidebar;
  };
</script>

<button on:click={toggleSidebar}>
  <GanttChart class="h-5 w-5 text-slate-500 mr-4" />
</button>

<div
  class="h-[calc(100vh-5rem)] bg-background md:bg-transparent px-2 pb-2 w-72 absolute ease-in-out transition-all duration-300 z-30 left-0 top-[5rem] {$metaStore.showSidebar
    ? 'translate-x-0'
    : '-translate-x-full'}  border-r-4 md:border-r-0 border-blue-50"
>
  <div class="bg-background border h-full px-2 rounded-xl">
    <div class="py-4 pl-2">
      <Contact />
    </div>
    <div
      class="w-full flex items-center justify-between bg-sky-100 text-blue-800 rounded-full py-2 text-sm px-6 font-semibold"
    >
      <div class="flex">
        <Pencil class="w-5 h-5 mr-3" />
        Inbox
      </div>
      <div>6</div>
    </div>
    {#each sidebarItems as sidebarItem}
      <div
        class="w-full flex items-center hover:bg-slate-100 text-slate-700 rounded-full py-2 text-sm px-6 font-medium"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          class="h-5 w-5 mr-3"
          xmlns="http://www.w3.org/2000/svg"
        >
          {@html sidebarItem.icon}
        </svg>
        {sidebarItem.name}
      </div>
    {/each}
    <hr class="m-2" />
    {#each sidebarSocialItems as sidebarSocialItem}
      <a href={sidebarSocialItem.link} target="_blank" rel="noreferrer">
        <div
          class="w-full flex items-center hover:bg-slate-100 text-slate-700 rounded-r-full py-2 text-sm px-6 font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="h-5 w-5 mr-3"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            {@html sidebarSocialItem.icon}
          </svg>
          {sidebarSocialItem.title}
        </div>
      </a>
    {/each}
    <hr class="m-2" />
  </div>
</div>
