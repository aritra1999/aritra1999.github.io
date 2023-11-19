<script lang="ts">
  import { page } from "$app/stores";
  import items from "$lib/data/emailList.json";

  const date = new Date();
  const today = `${date.getDate()} / ${new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format(date.getMonth())}`;
</script>

{#each items as item}
  <div
    class="border-b border-slate-200 px-5 py-4 text-slate-700 hover:bg-sky-50 {$page
      .url.pathname === item.link
      ? 'bg-sky-50'
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
            class="mr-3 h-5 w-5"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
              />
            </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="mr-2 h-5 w-5 fill-current text-blue-400"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                ><g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  ><path
                    stroke-width="2"
                    d="M13 3L19 9V21H5V3H13"
                    class="il-md-length-70 il-md-duration-4 il-md-delay-0"
                  /><path
                    d="M12.5 3V8.5H19"
                    class="il-md-length-15 il-md-duration-2 il-md-delay-4"
                  /><path
                    stroke-width="2"
                    d="M10 13L8 15L10 17"
                    class="il-md-length-15 il-md-duration-2 il-md-delay-6"
                  /><path
                    stroke-width="2"
                    d="M14 13L16 15L14 17"
                    class="il-md-length-15 il-md-duration-2 il-md-delay-8"
                  /></g
                ></svg
              >
            {:else if attachment.type === "pdf"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="mr-2 h-5 w-5"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
                ><path
                  fill="#909090"
                  d="m24.1 2.072l5.564 5.8v22.056H8.879V30h20.856V7.945L24.1 2.072"
                /><path
                  fill="#f4f4f4"
                  d="M24.031 2H8.808v27.928h20.856V7.873L24.03 2"
                /><path
                  fill="#7a7b7c"
                  d="M8.655 3.5h-6.39v6.827h20.1V3.5H8.655"
                /><path
                  fill="#dd2025"
                  d="M22.472 10.211H2.395V3.379h20.077v6.832"
                /><path
                  fill="#464648"
                  d="M9.052 4.534H7.745v4.8h1.028V7.715L9 7.728a2.042 2.042 0 0 0 .647-.117a1.427 1.427 0 0 0 .493-.291a1.224 1.224 0 0 0 .335-.454a2.13 2.13 0 0 0 .105-.908a2.237 2.237 0 0 0-.114-.644a1.173 1.173 0 0 0-.687-.65a2.149 2.149 0 0 0-.409-.104a2.232 2.232 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.193a.57.57 0 0 1 .459.181a.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.942.942 0 0 1-.524.114m3.671-2.306c-.111 0-.219.008-.295.011L12 4.538h-.78v4.8h.918a2.677 2.677 0 0 0 1.028-.175a1.71 1.71 0 0 0 .68-.491a1.939 1.939 0 0 0 .373-.749a3.728 3.728 0 0 0 .114-.949a4.416 4.416 0 0 0-.087-1.127a1.777 1.777 0 0 0-.4-.733a1.63 1.63 0 0 0-.535-.4a2.413 2.413 0 0 0-.549-.178a1.282 1.282 0 0 0-.228-.017m-.182 3.937h-.1V5.392h.013a1.062 1.062 0 0 1 .6.107a1.2 1.2 0 0 1 .324.4a1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a2.926 2.926 0 0 1-.033.513a1.756 1.756 0 0 1-.169.5a1.13 1.13 0 0 1-.363.36a.673.673 0 0 1-.416.106m5.08-3.915H15v4.8h1.028V7.434h1.3v-.892h-1.3V5.43h1.4v-.892"
                /><path
                  fill="#dd2025"
                  d="M21.781 20.255s3.188-.578 3.188.511s-1.975.646-3.188-.511Zm-2.357.083a7.543 7.543 0 0 0-1.473.489l.4-.9c.4-.9.815-2.127.815-2.127a14.216 14.216 0 0 0 1.658 2.252a13.033 13.033 0 0 0-1.4.288Zm-1.262-6.5c0-.949.307-1.208.546-1.208s.508.115.517.939a10.787 10.787 0 0 1-.517 2.434a4.426 4.426 0 0 1-.547-2.162Zm-4.649 10.516c-.978-.585 2.051-2.386 2.6-2.444c-.003.001-1.576 3.056-2.6 2.444ZM25.9 20.895c-.01-.1-.1-1.207-2.07-1.16a14.228 14.228 0 0 0-2.453.173a12.542 12.542 0 0 1-2.012-2.655a11.76 11.76 0 0 0 .623-3.1c-.029-1.2-.316-1.888-1.236-1.878s-1.054.815-.933 2.013a9.309 9.309 0 0 0 .665 2.338s-.425 1.323-.987 2.639s-.946 2.006-.946 2.006a9.622 9.622 0 0 0-2.725 1.4c-.824.767-1.159 1.356-.725 1.945c.374.508 1.683.623 2.853-.91a22.549 22.549 0 0 0 1.7-2.492s1.784-.489 2.339-.623s1.226-.24 1.226-.24s1.629 1.639 3.2 1.581s1.495-.939 1.485-1.035"
                /><path
                  fill="#909090"
                  d="M23.954 2.077V7.95h5.633l-5.633-5.873Z"
                /><path
                  fill="#f4f4f4"
                  d="M24.031 2v5.873h5.633L24.031 2Z"
                /><path
                  fill="#fff"
                  d="M8.975 4.457H7.668v4.8H8.7V7.639l.228.013a2.042 2.042 0 0 0 .647-.117a1.428 1.428 0 0 0 .493-.291a1.224 1.224 0 0 0 .332-.454a2.13 2.13 0 0 0 .105-.908a2.237 2.237 0 0 0-.114-.644a1.173 1.173 0 0 0-.687-.65a2.149 2.149 0 0 0-.411-.105a2.232 2.232 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.194a.57.57 0 0 1 .459.181a.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.942.942 0 0 1-.524.114m3.67-2.306c-.111 0-.219.008-.295.011l-.235.006h-.78v4.8h.918a2.677 2.677 0 0 0 1.028-.175a1.71 1.71 0 0 0 .68-.491a1.939 1.939 0 0 0 .373-.749a3.728 3.728 0 0 0 .114-.949a4.416 4.416 0 0 0-.087-1.127a1.777 1.777 0 0 0-.4-.733a1.63 1.63 0 0 0-.535-.4a2.413 2.413 0 0 0-.549-.178a1.282 1.282 0 0 0-.228-.017m-.182 3.937h-.1V5.315h.013a1.062 1.062 0 0 1 .6.107a1.2 1.2 0 0 1 .324.4a1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a2.926 2.926 0 0 1-.033.513a1.756 1.756 0 0 1-.169.5a1.13 1.13 0 0 1-.363.36a.673.673 0 0 1-.416.106m5.077-3.915h-2.43v4.8h1.028V7.357h1.3v-.892h-1.3V5.353h1.4v-.892"
                /></svg
              >
            {:else if attachment.type === "doc"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="mr-2 h-5 w-5 fill-current text-blue-400"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                ><g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  ><path
                    stroke-width="2"
                    d="M13 3L19 9V21H5V3H13"
                    class="il-md-length-70 il-md-duration-4 il-md-delay-0"
                  /><path
                    d="M12.5 3V8.5H19"
                    class="il-md-length-15 il-md-duration-2 il-md-delay-4"
                  /><path
                    stroke-width="2"
                    d="M10 13L8 15L10 17"
                    class="il-md-length-15 il-md-duration-2 il-md-delay-6"
                  /><path
                    stroke-width="2"
                    d="M14 13L16 15L14 17"
                    class="il-md-length-15 il-md-duration-2 il-md-delay-8"
                  /></g
                ></svg
              >
            {/if}
            {attachment.name}
          </div>
        {/each}
      </div>
    </a>
  </div>
{/each}
<div class="flex justify-center m-2">
  Made by <a
    href="https://github.com/aritra1999"
    class="underline mx-1"
    target="_blank"
    rel="noreferrer">aritra1999</a
  > with ❤️.
</div>
