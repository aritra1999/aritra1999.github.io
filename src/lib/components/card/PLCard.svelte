<script lang="ts">
  import { onMount } from "svelte";
  import type { PLItem } from "$lib/types/types";

  import Loading from "$lib/components/loading/Loading.svelte";
  import { Github, MoveRight } from "lucide-svelte";

  export let item: PLItem;

  let loading = false;
  let thumbnail: any;

  onMount(async () => {
    loading = true;
    thumbnail = (await import(`../../images/${item.thumbnail}.png`)).default;
    loading = false;
  });
</script>

<div class="card">
  <div class="w-full h-48">
    {#if loading}
      <div class="flex items-center justify-center w-full h-48 text-slate-600">
        <Loading />
      </div>
    {:else}
      <img
        class="rounded-t-2xl object-cover w-full h-48"
        src={thumbnail}
        alt="loading"
      />
    {/if}
  </div>
  <div class="pt-6 px-6 pb-4">
    <div class="mb-2 flex items-center">
      <h3 class="flex text-xl font-bold items-center">
        {item.title}
      </h3>
      {#if item.ongoing}
        <span
          class="px-2 py-0.5 ml-2 bg-yellow-100 text-yellow-600 rounded-full text-xs font-medium"
          >Ongoing</span
        >
      {:else}
        <span
          class="px-2 py-0.5 ml-2 bg-green-100 text-green-600 rounded-full text-xs font-medium"
          >Finised</span
        >
      {/if}
    </div>
    <p class="text-sm font-normal text-slate-600 mb-2">{item.description}</p>
    <div>
      {#each item.tags as tag}
        <div class="tag">{tag}</div>
      {/each}
    </div>
    <div class="card-link-container">
      {#each item.links as link}
        <div class="card-link">
          <a
            href={link.link}
            target="_blank"
            rel="noreferrer"
            class="flex items-center"
          >
            {#if link.type === "Github"}
              <Github class="w-6 h-6" />
            {:else}
              {link.type}
              <MoveRight class="w-4 h-4 ml-2" />
            {/if}
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>
