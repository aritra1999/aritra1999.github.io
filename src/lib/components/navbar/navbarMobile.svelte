<script lang="ts">
    import "$lib/components/navbar/navbar.css";
	import Sidebar from "$lib/components/sidebar/sidebar.svelte";
	import Profile from "$lib/components/navbar/profile.svelte";    
</script>

<div class="navbar-container p-2">
    <div class="py-2 px-4 w-full rounded-xl bg-white text-slate-600 text-sm flex justify-between items-center">
        <div class="flex items-center text-slate-800 font-semibold">
            <Sidebar />
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="h-7 w-7 mr-2 text-red-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
            </svg>
        </div>
        <input type="search" name="name" placeholder="Search all conversations" class="bg-transparent w-[calc(100%-120px)] p-1 mx-2" />
        <Profile />
    </div>
</div>