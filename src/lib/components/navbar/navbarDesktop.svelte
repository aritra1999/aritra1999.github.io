<script lang="ts">
    import "$lib/components/navbar/navbar.css";
    import Sidebar from "$lib/components/sidebar/sidebar.svelte";
    import Profile from "$lib/components/navbar/profile.svelte";
</script>

<div class="navbar-container px-8 py-2">
    
    <div class="flex items-center text-slate-800 font-semibold">
        <Sidebar />
        <a href="/">
            <div class="flex items-center justify-center cursor-pointer">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="h-7 w-7 mr-2 text-red-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
                </svg>
                MyMail
            </div>
        </a>
    </div>
    
    <div class="bg-white py-3 px-4 w-1/3 rounded-xl text-slate-800 text-sm flex justify-between items-center ">
        <input type="search" name="name" placeholder="Search all conversations" class="bg-transparent w-full p-1 mx-2" />
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div>
    
    <div class="flex items-center space-x-4">
        <div class="flex justify-center items-center px-5 py-2 rounded-full border border-blue-100 text-slate-500 font-medium text-sm hover:bg-slate-300 hover:border-slate-100">
            <div class="h-3 w-3 rounded-full bg-green-500 mr-3"></div>
            Active
        </div>
        <div class="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>              
        </div>
        <div class="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>              
        </div>
        <div class="icon-container">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M104 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56z"></path>
            </svg>
        </div>
        <Profile />
    </div>
</div>