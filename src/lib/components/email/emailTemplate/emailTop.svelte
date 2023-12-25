<script lang="ts">
  import { metaStore } from "$lib/store/metaStore";
  import { page } from "$app/stores";
  import EmailTopIcons from "./emailTopIcons.svelte";
  import emails from "$lib/data/emailList.json";

  function getPageName(url: string): string {
    url = url.replaceAll("/", "");
    const pageName = emails[url as keyof typeof emails]?.title ?? "";
    return pageName;
  }

  $: pageName = getPageName($page.url.pathname);
</script>

{#if $page.url.pathname !== "/"}
  {#if $metaStore.screen === "desktop"}
    <div class="py-4 px-10">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <h2 class="magical-underline text-3xl font-semibold w-fit">
            {pageName}
          </h2>
          <!-- <h3 class="text-lg">Welcome to the  page.</h3> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="ml-4 h-5 w-5"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M6.5 17H15l3.5-5L15 7H6.5l3.5 5l-3.5 5m8.5 2H3l4.5-7L3 5h12c.69 0 1.23.3 1.64.86L21 12l-4.36 6.14c-.41.56-.95.86-1.64.86Z"
            /></svg
          >
          <div class="ml-4 text-xs bg-slate-200 px-2 py-1 rounded-md">
            Inbox
          </div>
        </div>
        <EmailTopIcons />
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div
            class="h-[40px] w-[40px] bg-slate-300 rounded-full flex items-center justify-center mr-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="h-5 w-5"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 256 256"
              ><path
                fill="currentColor"
                d="M231.9 212a120.7 120.7 0 0 0-67.1-54.2a72 72 0 1 0-73.6 0A120.7 120.7 0 0 0 24.1 212a8 8 0 1 0 13.8 8a104.1 104.1 0 0 1 180.2 0a8 8 0 1 0 13.8-8ZM72 96a56 56 0 1 1 56 56a56 56 0 0 1-56-56Z"
              /></svg
            >
          </div>
          <div class="text-xs">
            <div>
              Aritra Mondal - <span class="text-slate-500">
                aritra041999@gmail.com
              </span>
            </div>
            To Me
          </div>
        </div>
        <div class="flex justify-around items-center space-x-1 text-zinc-700">
          <div class="text-slate-600 text-xs">
            Thursday, November 4, 3:18 PM
          </div>
        </div>
      </div>
    </div>
  {:else}
    <div class="flex justify-between border-b borer-slate-200 px-2 py-2">
      <a href="/" class="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        Back
      </a>
      <EmailTopIcons />
    </div>
    <div class="mx-4 px-2 py-4">
      <div class="flex items-center">
        <h3 class="text-lg">Welcome to the page.</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="ml-4 h-5 w-5"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M6.5 17H15l3.5-5L15 7H6.5l3.5 5l-3.5 5m8.5 2H3l4.5-7L3 5h12c.69 0 1.23.3 1.64.86L21 12l-4.36 6.14c-.41.56-.95.86-1.64.86Z"
          /></svg
        >
        <div class="ml-4 text-xs bg-slate-200 px-2 py-1 rounded-md">Inbox</div>
      </div>
      <div class="flex items-center mt-2">
        <div
          class="h-[40px] w-[40px] bg-slate-300 rounded-full flex items-center justify-center mr-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="h-5 w-5"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 256"
            ><path
              fill="currentColor"
              d="M231.9 212a120.7 120.7 0 0 0-67.1-54.2a72 72 0 1 0-73.6 0A120.7 120.7 0 0 0 24.1 212a8 8 0 1 0 13.8 8a104.1 104.1 0 0 1 180.2 0a8 8 0 1 0 13.8-8ZM72 96a56 56 0 1 1 56 56a56 56 0 0 1-56-56Z"
            /></svg
          >
        </div>
        <div class="text-xs">
          <div>
            Aritra Mondal - <span class="text-slate-500">
              aritra041999@gmail.com
            </span>
          </div>
          To Me -<span class="text-slate-600 text-xs"
            >Thursday, Nov 19, 3:18 PM</span
          >
        </div>
      </div>
    </div>
  {/if}
{/if}
