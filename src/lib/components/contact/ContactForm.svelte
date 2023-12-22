<script lang="ts">
  import { metaStore } from "$lib/store/metaStore";
  import supabase from "$lib/supabase/supa";
  import { cn } from "$lib/utils";
  import {
    Link2,
    Loader,
    MoreVertical,
    Paperclip,
    Smile,
    SpellCheck,
    Trash,
    Image,
    Info,
    X,
  } from "lucide-svelte";

  let loading = false;
  let status = "";

  async function handelSubmit(e: any) {
    loading = true;
    const formData = new FormData(e.target);
    let newMessage: Record<string, string> = {};
    for (let field of formData) {
      const [key, value] = field;
      newMessage[key] = value as string;
    }

    const { data, error } = await supabase
      .from("MySiteContact")
      .insert([newMessage]);
    status = error == null ? "success" : "error";
    loading = false;
    e.target.reset();
  }

  const menuItemClass =
    "flex justify-center items-center p-2 hover:bg-slate-200 rounded-lg";
</script>

{#if $metaStore.showContactForm}
  <div
    class="fixed bottom-0 right-0 sm:right-4 sm:bottom-4 w-[min(600px,100vw)] z-70 shadow-lg"
  >
    <div
      class="bg-slate-900 text-white py-3 px-4 w-full rounded-t-lg flex items-center justify-between"
    >
      New Message
      <button
        on:click={() => {
          $metaStore.showContactForm = false;
        }}
      >
        <X class="w-5 h-5" />
      </button>
    </div>
    <form
      on:submit|preventDefault={handelSubmit}
      class="bg-white rounded-b-lg border"
    >
      <div class="p-4 rounded-b-lg">
        {#if status === "success" || status === "error"}
          <div class="my-2">
            <div
              class="flex items-center p-4 border {status === 'success'
                ? 'text-green-800 bg-green-50'
                : 'text-red-800 bg-red-50'} rounded-lg"
            >
              <Info class="w-5 h-5" />
              <div class="mx-2">
                {#if status === "success"}
                  Successfully sent message :)
                {:else if status === "error"}
                  Something went wrong :(
                {/if}
              </div>
              <button
                type="button"
                class="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8"
                aria-label="Close"
                on:click={() => {
                  status = "";
                }}
              >
                <span class="sr-only">Close</span>
                <X class="h-5 w-5" />
              </button>
            </div>
          </div>
        {/if}

        <input
          name="from"
          type="email"
          placeholder="From"
          class="bg-white w-full py-2 px-4 mb-2 border-b border-slate-200"
          required
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          class="bg-white w-full py-2 px-4 mb-2 border-b border-slate-200"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          class="bg-white w-full py-2 px-4 mb-2 border-b border-white resize-none"
          rows="6"
        />

        <div class="flex items-center justify-between">
          <div
            class="flex items-center justify-between ml-3 w-full text-slate-600"
          >
            {#if $metaStore.screen !== "mobile"}
              <div class="flex items-center justify-center space-x-2">
                <div class={cn(menuItemClass)}>
                  <SpellCheck class="w-5 h-5" />
                </div>
                <div class={cn(menuItemClass)}>
                  <Paperclip class="w-5 h-5" />
                </div>
                <div class={cn(menuItemClass)}>
                  <Link2 class="w-5 h-5" />
                </div>
                <div class={cn(menuItemClass)}>
                  <Smile class="w-5 h-5" />
                </div>
                <div class={cn(menuItemClass)}>
                  <Image class="w-5 h-5" />
                </div>
              </div>
            {/if}
            <div
              class="flex items-center justify-center space-x-2 ml-auto mr-2"
            >
              <div class={cn(menuItemClass)}>
                <Trash class="w-5 h-5" />
              </div>
              <div class={cn(menuItemClass)}>
                <MoreVertical class="w-5 h-5" />
              </div>
            </div>
            <button
              class="px-6 py-2 bg-blue-600 rounded-lg text-white font-medium shadow-lg flex items-center"
              type="submit"
            >
              {#if loading}
                <Loader class="w-4 h-4 mr-3 text-white animate-spin" />
              {:else}
                Send
              {/if}
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
{/if}
