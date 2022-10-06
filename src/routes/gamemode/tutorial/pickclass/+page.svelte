<script lang="ts">
    import { goto } from '$app/navigation';

    import { AdventurerClassEnum } from '$lib/types/CursedAscent.svelte';

    import TypeWriting from "$lib/components/TypeWriting.svelte";
	import CursedCard from "$lib/components/CursedCard.svelte";
    import { fly } from 'svelte/transition';
	import { initializeTilt } from "$lib/components/TiltInitializer.svelte";

    let interval = 50;

    let showCards = false;

    function initCards() {
        console.log("init card now");
        initializeTilt();
    }

    function pickedClass(type: AdventurerClassEnum) {
        goto("/gamemode/tutorial/map");
    }
</script>

<div class="w-full flex flex-col items-center p-5">
    <div>
        <TypeWriting interval={interval} on:done={() => showCards=true} mode="cascade">
            <p class="text-slate-100 text-2xl mb-5">Your Adventurer can be one of four classes. The class is usually determined by the loot your Adventurer is wearing, but we are providing you with four adventurers ready to help you with your first ascent. Pick between one of the four below:</p>
        </TypeWriting>
    </div>
    {#if showCards}
        <div on:introend={() => initCards() } transition:fly|local="{{ y: 200, duration: 1000 }}" class="relative w-full flex flex-wrap items-center justify-center">
            <div on:click={e => pickedClass(AdventurerClassEnum.WARRIOR)} class="flex m-2 cursor-pointer">
                <CursedCard type="parallax" holographSrc="/images/class_warrior.png" title="Warrior" description="A big and burly heavyweight, ready to crush goblin skulls with his heavy warhammer" />
            </div>
            <div on:click={e => pickedClass(AdventurerClassEnum.HUNTER)}  class="flex m-2 cursor-pointer">
                <CursedCard type="parallax" holographSrc="/images/class_hunter.png" title="Hunter" description="An agile fighter with a keen hunting instinct, he won't think twice before slaughtering his enemies" />
            </div>
            <div on:click={e => pickedClass(AdventurerClassEnum.LIGHT_MAGE)}  class="flex m-2 cursor-pointer">
                <CursedCard type="parallax" holographSrc="/images/class_whitemage.png" title="Light Mage" description="A mage who has mastered the forgotten arcane arts. No foe will escape the grasp of magic" />
            </div>
            <div on:click={e => pickedClass(AdventurerClassEnum.DARK_MAGE)}  class="flex m-2 cursor-pointer">
                <CursedCard type="parallax" holographSrc="/images/class_darkmage.png" title="Dark Mage" description="A dark and powerful sorcerer that indulged in forbidden dark magic. His grim powers are matched only by his lust for power" />
            </div>
        </div>
    {/if}
</div>