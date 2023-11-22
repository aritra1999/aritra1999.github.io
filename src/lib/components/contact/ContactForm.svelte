<script lang="ts">
  import { metaStore } from "$lib/store/metaStore";
  import supabase from "$lib/supabase/supa";

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
</script>

{#if $metaStore.showContactForm}
  <div
    class="fixed bottom-0 right-0 sm:right-5 sm:bottom-5 w-[min(600px,100vw)] bg-white z-70 rounded-lg shadow-lg"
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <form on:submit|preventDefault={handelSubmit}>
      <div class="p-4 rounded-b-lg">
        {#if status === "success" || status === "error"}
          <div class="my-2">
            <div
              class="flex items-center p-4 {status === 'success'
                ? 'text-green-800 bg-green-50'
                : 'text-red-800 bg-red-50'} rounded-lg"
            >
              <svg
                aria-hidden="true"
                class="flex w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                /></svg
              >
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
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  /></svg
                >
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
                <div
                  class="flex justify-center items-center p-2 hover:bg-slate-200 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="w-5 h-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="M904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zm-650.3-80h85c4.2 0 8-2.7 9.3-6.8l53.7-166h219.2l53.2 166c1.3 4 5 6.8 9.3 6.8h89.1c1.1 0 2.2-.2 3.2-.5a9.7 9.7 0 0 0 6-12.4L573.6 118.6a9.9 9.9 0 0 0-9.2-6.6H462.1c-4.2 0-7.9 2.6-9.2 6.6L244.5 723.1c-.4 1-.5 2.1-.5 3.2c-.1 5.3 4.3 9.7 9.7 9.7zm255.9-516.1h4.1l83.8 263.8H424.9l84.7-263.8z"
                    />
                  </svg>
                </div>
                <div
                  class="flex justify-center items-center p-2 hover:bg-slate-200 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="w-5 h-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"
                    />
                  </svg>
                </div>
                <div
                  class="flex justify-center items-center p-2 hover:bg-slate-200 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="w-5 h-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
                    />
                  </svg>
                </div>
                <div
                  class="flex justify-center items-center p-2 hover:bg-slate-200 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="w-5 h-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8S14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8S7 8.67 7 9.5S7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                    />
                  </svg>
                </div>
                <div
                  class="flex justify-center items-center p-2 hover:bg-slate-200 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="w-5 h-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
                    />
                  </svg>
                </div>
              </div>
            {/if}
            <div
              class="flex items-center justify-center space-x-2 ml-auto mr-2"
            >
              <div
                class="flex justify-center items-center p-2 hover:bg-slate-200 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="w-5 h-5"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"
                  />
                </svg>
              </div>
              <div
                class="flex justify-center items-center p-2 hover:bg-slate-200 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="w-5 h-5"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 21 21"
                >
                  <g fill="currentColor" fill-rule="evenodd"
                    ><circle cx="10.5" cy="10.5" r="1" /><circle
                      cx="10.5"
                      cy="5.5"
                      r="1"
                    /><circle cx="10.5" cy="15.5" r="1" /></g
                  >
                </svg>
              </div>
            </div>
            <button
              class="px-12 py-2 bg-blue-600 rounded-lg text-white font-medium shadow-lg"
              type="submit"
            >
              {#if loading}
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline w-4 h-4 mr-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
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
