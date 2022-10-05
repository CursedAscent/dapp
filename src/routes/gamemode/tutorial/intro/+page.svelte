<script lang="ts">
    import TypeWriting from "$lib/TypeWriting.svelte";
    import CursedButton from "$lib/CursedButton.svelte";

    let buttonVisible = false;
    let actionsCounter = 0;

    $: if (actionsCounter == 4) {
        buttonVisible = true;
    }
</script>

<div class="flex grow flex-col items-center justify-center">
    <div>
        <TypeWriting on:done={() => actionsCounter++} mode="loopOnce">
            <p class="text-slate-100 text-2xl">Hello Adventurer.</p>
            <p class="text-slate-100 text-2xl">So, it seems you were brave enough to enter the dark lands of Cursed Ascent...</p>
            <p class="text-slate-100 text-2xl">We will guide you through one of its spires, but only this one time.</p>
            <p class="text-slate-100 text-2xl">Click on the next button to pick an Adventurer for this journey.</p>
        </TypeWriting>
    </div>
    {#if buttonVisible}
    <a href="/gamemode/tutorial/pickclass" class="m-5">
        <CursedButton text="Next"></CursedButton>
    </a>
    {/if}
</div>