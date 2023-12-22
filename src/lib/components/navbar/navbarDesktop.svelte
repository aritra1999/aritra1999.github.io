<script lang="ts">
  import "$lib/components/navbar/navbar.css";
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
  import Profile from "$lib/components/navbar/profile.svelte";
  import { Mailbox, Grip, HelpCircle, Search, Settings } from "lucide-svelte";
</script>

<div class="navbar-container px-8 py-2">
  <div class="flex items-center text-slate-800 font-semibold">
    <Sidebar />
    <a href="/">
      <div class="flex items-center justify-center cursor-pointer">
        <Mailbox class="h-10 w-10 mr-2 text-red-600" />
      </div>
    </a>
  </div>

  <div
    class="bg-white py-3 px-4 w-1/3 rounded-xl text-slate-800 text-sm flex justify-between items-center border"
  >
    <input
      type="search"
      name="name"
      placeholder="Search all conversations"
      class="bg-transparent w-full p-1 mx-2"
    />
    <Search class="h-5 w-5 text-slate-400" />
  </div>

  <div class="flex items-center space-x-4">
    <div
      class="flex justify-center items-center px-5 py-2 rounded-full border text-slate-500 font-medium text-sm hover:bg-slate-300"
    >
      <div class="h-3 w-3 rounded-full bg-green-500 mr-3" />
      Active
    </div>
    <div class="icon-container">
      <HelpCircle class="h-5 w-5" />
    </div>
    <div class="icon-container">
      <Settings class="h-5 w-5" />
    </div>
    <div class="icon-container">
      <Grip class="h-5 w-5" />
    </div>
    <Profile />
  </div>
</div>
