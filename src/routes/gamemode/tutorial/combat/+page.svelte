<script lang="ts">
    import { fly } from 'svelte/transition';
    import AdventurerStats from '$lib/components/AdventurerStats.svelte';
	import ShufflableDeck from '$lib/components/ShufflableDeck.svelte';
	import AnimatedText from '$lib/components/AnimatedText.svelte';
	import CursedButton from '$lib/components/CursedButton.svelte';
	import CursedCard from '$lib/components/CursedCard.svelte';

    import { initializeTilt } from "$lib/components/TiltInitializer.svelte";
	import { sleep } from '$lib/helpers/sleep.svelte';
	import { xlink_attr } from 'svelte/internal';

    enum GameState {
        PickCard,
        SealYourFate,
    }

    let cardsDrawn = false;
    let currentState = GameState.PickCard;

    async function drawCards() {
        console.log("Drew cards");
        cardsDrawn = true;
        await sleep(500);
        initializeTilt();
    }

    async function pickedCard(idx: number) {
        cardsDrawn = false;
        currentState = GameState.SealYourFate;
    }

    async function sealYourFate() {
        currentState = GameState.PickCard;
    }

</script>

<div class="relative w-full flex flex-col items-center p-5">
    {#if cardsDrawn}
        <div class="absolute w-full h-full bg-black/70 top-0 z-10">
            <div class="flex flex-grow flex-col sm:flex-row items-center justify-evenly h-full">
                <div on:click={(e) => pickedCard(0)} class="cursor-pointer mx-2" in:fly|local="{{ y: 200, x: 800, duration: 1000 }}">
                    <CursedCard type="basic" />
                </div>
                <div on:click={(e) => pickedCard(1)} class="cursor-pointer mx-2" in:fly|local="{{ y: 200, x: 600, delay: 500, duration: 1000 }}">
                    <CursedCard type="basic" />
                </div>
                <div on:click={(e) => pickedCard(2)} class="cursor-pointer mx-2" in:fly|local="{{ y: 200, x: 100, delay: 1000, duration: 1000 }}">
                    <CursedCard type="basic" />
                </div>
            </div>
        </div>
    {/if}
    <div in:fly|local="{{ y: -100, duration: 1000 }}" class="flex flex-grow flex-col w-full">
        <div class="flex flex-row justify-center">
            <h1 class="text-3xl text-slate-100 text-center">
                Cocky Imp
            </h1>
            <img style="filter: invert(1); image-rendering: pixelated; max-height:45px; max-width: 45px;" src="/images/map_fight.png" alt="Scene icon" />
        </div>
        <div class="flex border-t-2 border-slate-100 mt-5"></div>
        <div class="flex flex-col items-center justify-center">
            <div class="text-red-500 text-2xl">
                <AnimatedText type="wave" text="Cocky Imp" size="big" />
            </div>
            <span class="text-slate-100">50/50 HP</span>
        </div>
        <div class="flex flex-grow flex-col py-2 overflow-y-auto">
            <div class="text-slate-100 text-lg">
                > I am the intro scene
            </div>
            {#if currentState == GameState.PickCard}
                <div class="m-2 flex flex-none">
                    <div on:click={(e) => drawCards()}>
                        <CursedButton text="Draw Card" />
                    </div>
                </div>
            {:else if currentState == GameState.SealYourFate}
                <div class="m-2 flex flex-none">
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
            <AdventurerStats />
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