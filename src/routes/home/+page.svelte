<script lang="ts">
    export let data;
</script>

<div class="flex lg:flex-row flex-col-reverse h-full -mt-6">
    <div class="flex items-center justify-center sm:h-full h-1/2 lg:w-1/2 w-full">
        <div class="px-10">
            <div class="mb-2">Hi, I'm Aritra Mondal.</div>
            <div class="flex flex-col sm:text-7xl text-5xl text-gray-800 font-extrabold space-y-4">
                <span class="magical-underline w-fit">Developer. </span>
                <span class="magical-underline w-fit">Designer. </span>
                <span class="magical-underline w-fit">Gamer. </span>
            </div>
        </div>
    </div>
    <div class="lg:w-1/2 sm:p-0 sm:mt-auto sm:mb-auto mt-10 lg:px-16 md:px-10 px-6 w-full">
        <img src="{data.gif}" class="w-full sm:w-2/3 md:w-2/3 lg:w-full mx-auto rounded-t-[50px] rounded-bl-[50px]" alt="me"/>
        <div class="flex justify-end">*This is random GIF from GIPHY, please don't offended! :)</div>
    </div>
</div>
