<script>
  import { page } from "$app/stores";
  import { metaStore } from "$lib/store/metaStore";
  import EmailTop from "$lib/components/email/emailTemplate/emailTop.svelte";
  import EmailBottom from "$lib/components/email/emailTemplate/emailBottom.svelte";
</script>

{#if $metaStore.screen === "desktop" || $page.url.pathname !== "/"}
  <div
    class="{$metaStore.screen !== 'desktop'
      ? 'absolute left-0'
      : ''} h-[calc(100vh-5.5rem)] sm:h-[calc(100vh-6rem)] border-l border-b w-[calc(100vw-1rem)] sm:w-full sm:border-0 rounded-lg mx-2 sm:mx-0 p-2 z-50 overflow-y-auto bg-background"
  >
    <EmailTop />
    <slot />
    <EmailBottom />
  </div>
{/if}
