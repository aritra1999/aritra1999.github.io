<script lang="ts">
  import "../app.postcss";
  import { page } from "$app/stores";

  import EmailList from "$lib/components/email/emailList/emailList.svelte";
  import Navbar from "$lib/components/navbar/navbarContainer.svelte";
  import Topbar from "$lib/components/topbar/topbar.svelte";
  import EmailBody from "$lib/components/email/emailBody/emailBody.svelte";
  import ContactForm from "$lib/components/contact/ContactForm.svelte";
  import { metaStore } from "$lib/store/metaStore";
  import { cn } from "$lib/utils";

  let innerWidth = 0;
  $: metaStore.set({
    screen: innerWidth < 850 ? "mobile" : "desktop",
    showSidebar: innerWidth >= 1200,
    showContactForm: false,
  });

  $: reactiveClasses = {
    emailListW:
      $metaStore.screen === "desktop"
        ? "border-r border-slate-200 w-[40rem]"
        : "w-full",
    outerContainerPl:
      $metaStore.showSidebar && $metaStore.screen === "desktop"
        ? "pl-72"
        : "pl-2",
  };

  const classes = {
    outerContainer:
      "fixed w-full pr-2 pb-3 ease-in-out transition-all duration-300 h-[calc(100vh-5rem)]",
    innerContainer:
      "flex sm:h-[calc(100vh-10rem)] h-[calc(100vh-6rem)] overflow-y-auto overflow-x-hidden w-full border-slate-200",
  };
</script>

<svelte:window bind:innerWidth />

<ContactForm />
<div>
  <Navbar />
  <div class={cn(classes.outerContainer, reactiveClasses.outerContainerPl)}>
    <div class="bg-background rounded-xl h-full">
      <Topbar />
      <div class={cn(classes.innerContainer)}>
        <div class={cn(reactiveClasses.emailListW, "overflow-y-auto")}>
          <EmailList />
        </div>
        <EmailBody>
          <slot />
        </EmailBody>
      </div>
    </div>
  </div>
</div>
