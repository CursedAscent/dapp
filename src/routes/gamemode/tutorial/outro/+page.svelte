<script lang="ts">
    import { fade } from 'svelte/transition';
    import TypeWriting from "$lib/components/TypeWriting.svelte";
    import CursedButton from "$lib/components/CursedButton.svelte";

    let buttonVisible = false;
</script>

<div class="flex grow flex-col items-center justify-center">
    <div>
        <TypeWriting on:done={() => buttonVisible = true} mode="cascade">
            <p class="text-slate-100 text-2xl text-center">Well done! You got to the end of the demo!</p>
            <p class="text-slate-100 text-2xl text-center">Keep your eyes peeled for more content soon!</p>
        </TypeWriting>
    </div>
    {#if buttonVisible}
        <a in:fade|local href="/" class="m-5">
            <CursedButton text="Back to Homepage"></CursedButton>
        </a>
    {/if}
</div>