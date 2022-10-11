<script lang="ts">
    import { goto } from '$app/navigation';

    import { AdventurerClassEnum } from '$lib/types/CursedAscent.svelte';

    import TypeWriting from "$lib/components/TypeWriting.svelte";
	import CursedCard from "$lib/components/CursedCard.svelte";
    import { fly } from 'svelte/transition';
	import { initializeTilt } from "$lib/components/TiltInitializer.svelte";
	import { pickedTutorialClass } from '$lib/stores/tutorial/stores';
	import { currentCursedAscentTX, initializeGame } from '$lib/stores/cursedascent/gamemode/stores';
	import { starknetInst } from '$lib/stores/starknet/stores';
	import CursedLoading from '$lib/components/CursedLoading.svelte';

    let interval = 50;

    let showCards = false;

    let isLoading = false;

    function initCards() {
        console.log("init card now");
        initializeTilt();
    }

    async function pickedClass(type: AdventurerClassEnum) {
        $pickedTutorialClass = type;

        isLoading = true;
        let pristine = true;
        try {
            await initializeGame($starknetInst.account, type);
        } catch (e) {
            console.log(e);
            pristine = false;
        }
        
        $currentCursedAscentTX = "";

        isLoading = false;

        if (pristine)
            goto("/gamemode/tutorial/map");
    }
</script>

<div class="relative w-full flex flex-col items-center p-5">
    {#if isLoading}
        <div class="absolute w-full h-full top-0 flex z-20">
            <CursedLoading>
                {#if $currentCursedAscentTX}
                    <p class="text-slate-100 text-xl text-center">Got TX : {$currentCursedAscentTX}. Waiting for ACCEPTED_ON_L2...</p>
                {:else}
                    <p class="text-slate-100 text-xl">Waiting for TX broadcast...</p>
                {/if}
            </CursedLoading>
        </div>
    {/if}
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
                <CursedCard type="parallax" holographSrc="/images/class_darkmage.png" title="Dark Mage" description="A dark and powerful sorcerer that indulged in forbidden dark magic. His grim spells are matched only by his lust for power" />
            </div>
        </div>
    {/if}
</div>