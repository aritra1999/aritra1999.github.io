<script lang="ts">
  import "$lib/components/navbar/navbar.css";
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
  import Profile from "$lib/components/navbar/profile.svelte";
  import { Mailbox } from "lucide-svelte";
</script>

<div class="navbar-container p-2">
  <div
    class="py-2 px-4 w-full rounded-xl bg-white text-slate-600 text-sm flex justify-between items-center border"
  >
    <div class="flex items-center text-slate-800 font-semibold">
      <Sidebar />
      <Mailbox class="h-10 w-10 mr-2 text-red-600" />
    </div>
    <input
      type="search"
      name="name"
      placeholder="Search all conversations"
      class="bg-transparent w-[calc(100vw-350px)] p-1 mx-2"
    />
    <Profile />
  </div>
</div>
