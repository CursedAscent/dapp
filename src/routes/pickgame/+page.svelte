<script>
	import CursedCard from "$lib/components/CursedCard.svelte";
	import { initializeTilt } from "$lib/components/TiltInitializer.svelte";
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition'

    onMount(() => {
        initializeTilt();
    })
</script>

<div in:fade|local class="relative flex flex-grow flex-wrap items-center justify-center">
    <a href="/gamemode/tutorial/intro" class="m-2 cursor-pointer">
        <CursedCard title="Tutorial" description="A short tutorial to learn the basics of Cursed Ascent" />
    </a>
    <div class="m-2">
        <CursedCard type="unavailable" title="Cursed Ascent" description="Are you ready to brave the perils hosted by the 4 cursed spires of Cursed Ascent?" />
    </div>
    <div class="m-2">
        <CursedCard type="unavailable" title="Adventurer's Nightmare" description="A procedurally generated spire. Only for the most dauntless adventurers" />
    </div>
    <div class="m-2">
        <CursedCard type="unavailable" title="Load Game" description="Load a saved session to resume a game" />
    </div>
    <a href="/library" class="m-2 cursor-pointer">
        <CursedCard title="The Archive" description="A library cataloging all the cursed cards available in Cursed Ascent" />
    </a>
    <a href="/trophies" class="m-2 cursor-pointer">
        <CursedCard title="Trophies" description="The various artifacts you have collected during your ascents" />
    </a>
</div>