<script>
  import topbarItems from "$lib/data/topbar.json";
</script>

<div class="w-full overflow-x-auto flex space-x-4 pt-2 topbar border-b">
  <div
    class="w-40 flex space-x-4 items-center justify-center py-3 px-4 text-sm font-medium border-b-4 border-transparent border-red-500 text-red-500"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      class="w-5 h-5"
      width="32"
      height="32"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z"
      />
    </svg>
    <div class="flex items-center space-x-4">
      Primary
      <span
        class="inline-flex items-center justify-center pt-0.5 px-2 ml-2 text-xs font-semibold text-red-500 bg-red-100 rounded-full"
      >
        7
      </span>
    </div>
  </div>
  {#each topbarItems as item}
    <div
      class="w-40 flex space-x-4 items-center justify-center py-3 px-4 text-sm font-medium text-gray-500 border-b-4 border-transparent {item.color}"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-5 h-5"
      >
        {@html item.icon}
      </svg>
      <div>{item.name}</div>
    </div>
  {/each}
</div>

<style>
  .topbar::-webkit-scrollbar {
    display: none;
  }
</style>
