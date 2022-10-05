<script lang="ts">
    import TypeWriting from "$lib/TypeWriting.svelte";
	import CursedCard from "$lib/CursedCard.svelte";
    import { fly } from 'svelte/transition';
	import { initializeTilt } from "$lib/TiltInitializer.svelte";
    import { onMount } from 'svelte';

    let showCards = false;

    function initCards() {
        console.log("init card now");
        initializeTilt();
    }
</script>

<div class="w-full flex flex-col items-center p-5">
    <div>
        <TypeWriting interval=50 on:done={() => showCards=true} mode="cascade">
            <p class="text-slate-100 text-2xl mb-5">Your Adventurer can be one of four classes. The class is usually determined by the loot your Adventurer is wearing, but we are providing you with four adventurers ready to help you with your first ascent. Pick between one of the four below:</p>
        </TypeWriting>
    </div>
    {#if showCards}
        <div on:introend={() => initCards() } transition:fly="{{ y: 200, duration: 1000 }}" class="relative w-full flex flex-wrap items-center justify-center">
            <div class="flex m-2 cursor-pointer">
                <CursedCard type="parallax" holographSrc="/images/class_warrior.png" title="Warrior" description="A big and burly heavyweight, ready to crush goblin skulls with his heavy warhammer" />
            </div>
            <div class="flex m-2 cursor-pointer">
                <CursedCard type="parallax" holographSrc="/images/class_hunter.png" title="Hunter" description="An agile fighter with a keen hunting instinct, he won't think twice before slaughtering his enemies" />
            </div>
            <div class="flex m-2 cursor-pointer">
                <CursedCard type="parallax" holographSrc="/images/class_whitemage.png" title="Light Mage" description="A mage who has mastered the forgotten arcane arts. No foe will escape the grasp of magic" />
            </div>
            <div class="flex m-2 cursor-pointer">
                <CursedCard type="parallax" holographSrc="/images/class_darkmage.png" title="Dark Mage" description="A dark and powerful sorcerer that indulged in forbidden dark magic. His grim powers are matched only by his lust for power" />
            </div>
        </div>
    {/if}
</div>