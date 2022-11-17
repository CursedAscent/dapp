<script lang="ts">
    import { fly } from 'svelte/transition';
    import { fade } from 'svelte/transition';
    import { goto } from '$app/navigation';

    import AdventurerStats from '$lib/components/AdventurerStats.svelte';
	import ShufflableDeck from '$lib/components/ShufflableDeck.svelte';
	import AnimatedText from '$lib/components/AnimatedText.svelte';
	import CursedButton from '$lib/components/CursedButton.svelte';
	import CursedCard from '$lib/components/CursedCard.svelte';

    import { initializeTilt } from "$lib/components/TiltInitializer.svelte";
	import { sleep } from '$lib/helpers/sleep.svelte';
	import { pickedTutorialClass } from '$lib/stores/tutorial/stores';

    import CockyImpJSON from '$lib/metadatas/scenes/cocky_imp.json';
    import ImpJSON from '$lib/metadatas/enemies/imp.json';
	import TypeWriting from '$lib/components/TypeWriting.svelte';

    enum GameState {
        Idle,
        PickCard,
        SealYourFate,
    }

    let introFinished = false;
    let cardsDrawn = false;
    let currentState = GameState.Idle;

    let combatDialog: string[] = [];

    async function drawCards() {
        cardsDrawn = true;
        await sleep(500);
        initializeTilt();
    }

    async function pickedCard(idx: number) {
        cardsDrawn = false;
        currentState = GameState.SealYourFate;
    }

    async function sealYourFate() {
        goto("/gamemode/tutorial/outro");
    }

    function introDone() {
        introFinished = true;
        combatDialog = [ImpJSON.actions[0].description_before.toLowerCase()];
        currentState = GameState.PickCard;
    }

</script>

<div class="relative w-full flex flex-col items-center p-5">
    {#if cardsDrawn}
        <div class="absolute w-full h-full bg-black/70 top-0 z-10">
            <div class="flex flex-grow flex-col sm:flex-row items-center justify-evenly h-full">
                <div on:click={(e) => pickedCard(0)} class="cursor-pointer mx-2" in:fly|local="{{ y: 200, x: 800, duration: 1000 }}">
                    <CursedCard type="basic" description="Pick"  />
                </div>
                <div on:click={(e) => pickedCard(1)} class="cursor-pointer mx-2" in:fly|local="{{ y: 200, x: 600, delay: 500, duration: 1000 }}">
                    <CursedCard type="basic" description="a" />
                </div>
                <div on:click={(e) => pickedCard(2)} class="cursor-pointer mx-2" in:fly|local="{{ y: 200, x: 100, delay: 1000, duration: 1000 }}">
                    <CursedCard type="basic" description="card" />
                </div>
            </div>
        </div>
    {/if}
    <div in:fly|local="{{ y: -50, duration: 1000 }}" class="flex flex-grow flex-col w-full">
        <div class="flex flex-row justify-center">
            <h1 class="text-3xl text-slate-100 text-center mr-2">
                {CockyImpJSON.name}
            </h1>
            <img style="filter: invert(1); image-rendering: pixelated; max-height:45px; max-width: 45px; width: 100%" src="/images/map_fight.png" alt="Scene icon" />
        </div>
        <div class="flex border-t-2 border-slate-100 mt-5"></div>
        {#if introFinished}
            <div in:fly|local={{ x: -100, duration: 1000 }} class="flex flex-col items-center justify-center">
                <div class="text-red-500 text-2xl">
                    <AnimatedText type="wave" text="Cocky Imp" size="big" />
                </div>
                <span class="text-slate-100">50/50 HP</span>
            </div>
        {/if}
        <div class="flex flex-grow flex-col py-2 overflow-y-auto">
            <div>
                <TypeWriting on:done={() => introDone()} mode="cascade" interval={40}> 
                    <p class="text-slate-100 text-lg" >{ "> " + CockyImpJSON.events[1]}</p>
                </TypeWriting>
                {#each combatDialog as dialog}
                    <TypeWriting mode="cascade" skippable={false} interval={40}>
                        <span class="text-slate-100">></span>
                        <span class="text-red-500 text-lg">Cocky Imp</span>
                        <span class="text-slate-100 text-lg">{dialog}</span>
                    </TypeWriting>
                {/each}
            </div>
            {#if currentState == GameState.PickCard}
                <div in:fade class="m-2 flex flex-none">
                    <div on:click={(e) => drawCards()}>
                        <CursedButton text="Draw Card" />
                    </div>
                </div>
            {:else if currentState == GameState.SealYourFate}
                <div in:fade class="m-2 flex flex-none">
                    <div on:click={(e) => sealYourFate()}>
                        <CursedButton text="Seal Your Fate" />
                    </div>
                </div>
            {/if}
        </div>
    </div>
    <div in:fly|local="{{ y: 200, duration: 1000 }}" class="flex flex-wrap w-full items-center space-y-2">
        <div class="flex-grow w-full border-t-2 border-slate-100"></div>
        <div class="flex flex-wrap w-full space-x-4">
            <AdventurerStats classType={$pickedTutorialClass} />
            <div class="flex flex-col">
                <div class="flex flex-col">
                    <h2 class="text-xl text-slate-100">Debuffs</h2>
                    <p class="text-slate-100">None</p>
                </div>
                <div class="flex flex-col">
                    <h2 class="text-xl text-slate-100">Buffs</h2>
                    <p class="text-slate-100">None</p>
                </div>
            </div>
            <div class="flex flex-grow justify-center">
            </div>
            <div class="flex">
                <img style="max-height: 150px;" src="/images/cursed_no_card_picked.png" alt="Empty card" />
            </div>
            <ShufflableDeck />
        </div>
    </div>
</div>