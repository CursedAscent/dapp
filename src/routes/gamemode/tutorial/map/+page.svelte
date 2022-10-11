<script lang="ts">
    import TypeWriting from "$lib/components/TypeWriting.svelte";
    import AdventurerStats from "$lib/components/AdventurerStats.svelte";

    import { goto } from '$app/navigation';
    import { sleep } from "$lib/helpers/sleep.svelte";

    import { firstTimeMap, pickedTutorialClass } from "$lib/stores/tutorial/stores.js";

	import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
	import SpireMap from "$lib/components/SpireMap.svelte";

    let steps=0;

    onMount(() => {
        steps = $firstTimeMap ? 0 : 42;
    })

    async function nextStep(delay: number) {
        await sleep(delay);
        steps++;
    }

    function pickedRoom(roomPicked: any) {
        console.log("clicked man")
        goto("/gamemode/tutorial/combat")
    }
</script>

<div class="w-full flex flex-col items-center p-5">
    {#if $firstTimeMap}
        {#if steps < 2}
            <div class="flex flex-grow justify-center items-center">
                <TypeWriting on:done={()=> nextStep(2000)} cursorOnFinish={true} mode="loopOnce">
                    <p class="text-slate-100 text-2xl">An interesting choice...</p>
                    <p class="text-slate-100 text-2xl">Now let's take a look at the spire's map, shall we?</p>
                </TypeWriting>
            </div>
        {:else if steps == 2}
            <div class="flex flex-grow items-center">
                <TypeWriting on:done={()=> nextStep(4000)} interval={50} cursorOnFinish={true} mode="cascade">
                    <p class="text-slate-100 text-2xl">You will be able to check your adventurer's stats in the section just below.</p>
                    <p class="text-slate-100 text-2xl">You can also save your game session by clicking the 'Save Session' button.</p>
                    <p class="text-slate-100 text-2xl">This will let you download your session to your computer.</p>
                    <p class="text-slate-100 text-2xl">You can resume a saved session later by loading it in the start menu.</p>
                </TypeWriting>
            </div>
        {:else if steps == 3}
        <div class="flex items-center">
            <TypeWriting cursorOnFinish={true} interval={75} mode="loopOnce">
                <p class="text-slate-100 text-2xl mb-5">And above that, a map of the spire's floors</p>
                <p class="text-slate-100 text-2xl mb-5">You can find 4 types of rooms in Cursed Ascent</p>
                <p class="text-slate-100 text-2xl mb-5">Fight rooms, Elite Fight rooms, Rest rooms and one Boss room at the top</p>
                <p class="text-slate-100 text-2xl mb-5">You need to clear one room from a floor before proceeding to the next one</p>
                <p class="text-slate-100 text-2xl mb-5">It is time for us to part ways...</p>
                <p class="text-slate-100 text-2xl mb-5">Click on the room on the first floor, and may luck be by your side Adventurer...</p>
            </TypeWriting>
        </div>
        {/if}
    {/if}
    {#if steps > 2}
    <div in:fly|local="{{ y: -200, duration: 1000 }}" class="flex flex-grow items-center">
        <SpireMap on:roomSelected={(d) => pickedRoom(d)} />
    </div>
    {/if}
    {#if steps > 1}
        <div in:fly|local="{{ y: 200, duration: 1000 }}" class="flex flex-col w-full items-center space-y-2 mt-4">
            <div class="flex-grow w-full border-t-2 border-slate-100"></div>
            <div>
                <AdventurerStats classType={$pickedTutorialClass} />
            </div>
        </div>
    {/if}
</div>