<script>
	import CursedCard from "$lib/CursedCard.svelte";
	import { initializeTilt } from "$lib/TiltInitializer.svelte";
    import { onMount } from 'svelte';

    onMount(() => {
        initializeTilt();
    })
</script>

<div class="relative w-full flex flex-row items-center justify-center">
    <a href="/gamemode/tutorial/intro" class="m-2 cursor-pointer">
        <CursedCard title="Tutorial" description="A short tutorial to learn the basics of Cursed Ascent" />
    </a>
    <div class="m-2 cursor-pointer">
        <CursedCard title="Cursed Ascent" description="Are you ready to brave the perils hosted by the 4 cursed spires of Cursed Ascent?" />
    </div>
    <div class="m-2 cursor-pointer">
        <CursedCard title="Adventurer's Nightmare" description="A procedurally generated spire. Only for the most dauntless adventurers" />
    </div>
    <div class="m-2 cursor-pointer">
        <CursedCard title="The Archive" description="A library cataloging all the cursed cards available in Cursed Ascent" />
    </div>
</div>