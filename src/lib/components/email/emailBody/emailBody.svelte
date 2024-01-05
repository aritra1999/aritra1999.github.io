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
      : ''} h-[calc(100vh-5.5rem)] sm:h-[calc(100vh-5.6rem)] border-l-0 sm:border-0 md:border-l-0 border-r sm:border-r-0 border-b w-[calc(100vw-1rem)] sm:w-fit md:border-0 rounded-lg mx-2.5 md:m-0 p-2 z-50 overflow-y-auto overflow-x-hidden bg-background"
  >
    <EmailTop />
    <slot />
    <EmailBottom />
  </div>
{/if}
