<script lang="ts">
  import { page } from "$app/stores";
  import items from "$lib/data/emailList.json";
  import {
    FileSpreadsheet,
    FileTerminal,
    FileText,
    Paperclip,
  } from "lucide-svelte";

  const date = new Date();
  const today = `${date.getDate()} / ${new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format(date.getMonth())}`;
</script>

{#each items as item}
  <div
    class="border-b border-zinc-300 px-5 py-4 text-slate-700 hover:bg-zinc-100 {$page
      .url.pathname === item.link
      ? 'hover:bg-zinc-100'
      : ''}"
  >
    <a href={item.link}>
      <div class="flex justify-between mb-2">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M6.5 17H15l3.5-5L15 7H6.5l3.5 5l-3.5 5m8.5 2H3l4.5-7L3 5h12c.69 0 1.23.3 1.64.86L21 12l-4.36 6.14c-.41.56-.95.86-1.64.86Z"
            /></svg
          >
          <span>{item.title}</span>
        </div>
        <div class="flex items-center space-x-2 text-slate-500 text-xs">
          {#if item.attachments.length}
            <Paperclip class="w-5 h-5" />
          {/if}
          <span>{today}</span>
        </div>
      </div>
      <div class="text-slate-400 text-sm">{item.content}</div>
      <div class="flex items-center font-medium">
        {#each item.attachments as attachment}
          <div
            class="border-2 border-slate-200 flex px-4 py-2 items-center justify-center rounded-full mt-2 mr-2 hover:bg-blue-50 text-xs text-slate-500"
          >
            {#if attachment.type === "code"}
              <FileTerminal class="mr-2 h-5 w-5  text-blue-400" />
            {:else if attachment.type === "pdf"}
              <FileText class="mr-2 h-5 w-5 text-red-400" />
            {:else if attachment.type === "doc"}
              <FileSpreadsheet class="mr-2 h-5 w-5" />
            {/if}
            {attachment.name}
          </div>
        {/each}
      </div>
    </a>
  </div>
{/each}
