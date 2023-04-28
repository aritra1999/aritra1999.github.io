<script lang="ts">
    export let data;

    let width: number; 
</script>

<div bind:clientWidth={width} class="flex {width < 800 ? 'flex-col-reverse -mt-36' : 'flex-row -my-24'} h-full">
    <div class="flex flex-col items-center justify-center {width < 800 ? 'h-fit' : 'h-full'} w-full">        
        <div class="py-10 px-4">
            <div class="mb-2">Hi, I'm Aritra Mondal.</div>
            <div class="flex flex-col sm:text-7xl text-5xl text-gray-800 font-extrabold space-y-4">
                <span class="magical-underline w-fit">Developer. </span>
                <span class="magical-underline w-fit">Designer. </span>
                <span class="magical-underline w-fit">Gamer. </span>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-center {width < 800 ? 'h-fit' : 'h-full'} w-full p-4">
        <img class="rounded-t-[30px] rounded-bl-[30px] mx-auto max-h-[300px]" src={data.gif} alt="me"/>
    </div>
</div>
<div class="flex text-xs justify-end">*This is random GIF from GIPHY, please don't get offended! :)</div>
