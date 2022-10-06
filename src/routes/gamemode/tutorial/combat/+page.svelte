<script lang="ts">
    import { fly } from 'svelte/transition';
    import AdventurerStats from '$lib/components/AdventurerStats.svelte';
	import ShufflableDeck from '$lib/components/ShufflableDeck.svelte';
</script>

<div class="w-full flex flex-col items-center p-5">
    <div in:fly|local="{{ y: -100, duration: 1000 }}" class="flex flex-grow flex-col w-full">
        <div class="flex flex-row justify-center">
            <h1 class="text-3xl text-slate-100 text-center">
                Cocky Imp
            </h1>
            <img style="filter: invert(1); image-rendering: pixelated; max-height:45px; max-width: 45px;" src="/images/map_fight.png" alt="Scene icon" />
        </div>
        <div class="flex border-t-2 border-slate-100 mt-5"></div>
        <div class="flex flex-grow py-2">
            <div  class="text-slate-100 text-lg">
                I am some text
            </div>
        </div>
    </div>
    <div in:fly|local="{{ y: 200, duration: 1000 }}" class="flex flex-col w-full items-center space-y-2">
        <div class="flex-grow w-full border-t-2 border-slate-100"></div>
        <div class="flex w-full space-x-4">
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
            <div class="flex flex-grow">
            </div>
            <div class="flex">
                <img style="max-height: 150px;" src="/images/cursed_no_card_picked.png" alt="Empty card" />
            </div>
            <ShufflableDeck />
        </div>
    </div>
</div>