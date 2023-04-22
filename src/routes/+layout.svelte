<script lang="ts">
    import "../app.css";
    import { page } from "$app/stores";
    
    import EmailList from "$lib/components/emailList/emailList.svelte";
    import Navbar from "$lib/components/navbar/navbarContainer.svelte";
    import Topbar from "$lib/components/topbar/topbar.svelte";
    import EmailTop from "$lib/components/emailTemplate/emailTop.svelte";
    import EmailBottom from "$lib/components/emailTemplate/emailBottom.svelte";
    import ContactForm from "$lib/components/contact/ContactForm.svelte";
    import { metaStore } from "$lib/store/metaStore";

    $: innerWidth = 0
    $: metaStore.set({ screen: innerWidth < 850 ? 'mobile' : 'desktop', showSidebar: innerWidth >= 1200, showContactForm: false })

</script>
<svelte:window bind:innerWidth />

<div class="page-container">
    <Navbar />
    <div class="fixed w-full pr-2 pb-3 ease-in-out transition-all duration-300 {($metaStore.showSidebar && $metaStore.screen === 'desktop') ? 'pl-72' : 'pl-2'} h-[calc(100vh-5rem)]">
        <div class="bg-white rounded-xl h-full">
            {#if $metaStore.screen == 'desktop' }
                <Topbar />
            {/if}
            <div class="flex sm:h-[calc(100vh-10rem)] h-[calc(100vh-6rem)] overflow-y-auto overflow-x-hidden w-full border-slate-200">
                <div class="{$metaStore.screen === 'desktop' ? 'border-r border-slate-200 w-[40rem]': 'w-full'} overflow-y-auto"><EmailList/></div>
                {#if $metaStore.screen === 'desktop' || $page.url.pathname !== '/'}
                    <div class="{$metaStore.screen !== 'desktop' ? 'absolute left-0 w-screen h-[calc(100vh-5rem)]' : 'w-full'} p-2 bg-white z-50 overflow-y-auto">
                        <EmailTop />
                        <slot />
                        <EmailBottom />
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
{#if $metaStore.showContactForm}
    <ContactForm />
{/if}
