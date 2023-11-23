<script>
  import { page } from "$app/stores";
  import { metaStore } from "$lib/store/metaStore";
  import EmailTop from "$lib/components/email/emailTemplate/emailTop.svelte";
  import EmailBottom from "$lib/components/email/emailTemplate/emailBottom.svelte";
</script>

{#if $metaStore.screen === "desktop" || $page.url.pathname !== "/"}
  <div
    class="{$metaStore.screen !== 'desktop'
      ? 'absolute left-0 w-screen h-[calc(100vh-5rem)]'
      : 'w-full'} p-2 bg-background z-50 overflow-y-auto"
  >
    <EmailTop />
    <slot />
    <EmailBottom />
  </div>
{/if}
