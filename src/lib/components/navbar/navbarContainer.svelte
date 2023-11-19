<script lang="ts">
  import { metaStore } from "$lib/store/metaStore";
  import NavbarMobile from "$lib/components/navbar/navbarMobile.svelte";
  import NavbarDesktop from "$lib/components/navbar/navbarDesktop.svelte";
</script>

<div class="w-screen relative">
  <div class="h-[5rem]">
    {#if $metaStore.screen === "mobile"}
      <NavbarMobile />
    {:else}
      <NavbarDesktop />
    {/if}
  </div>
</div>
