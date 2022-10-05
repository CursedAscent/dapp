<script>
	import CursedCard from "$lib/CursedCard.svelte";
	import { initializeTilt } from "$lib/TiltInitializer.svelte";
    import { onMount } from 'svelte';

    onMount(() => {
        initializeTilt();
    })
</script>

<div class="relative w-full flex flex-wrap items-center justify-center">
    <div class="flex m-2 cursor-pointer">
        <CursedCard type="parallax" holographSrc="/images/class_warrior.png" title="Warrior" description="The warrior class" />
    </div>
    <div class="flex m-2 cursor-pointer">
        <CursedCard type="parallax" holographSrc="/images/class_hunter.png" title="Hunter" description="The hunter class" />
    </div>
    <div class="flex m-2 cursor-pointer">
        <CursedCard type="parallax" holographSrc="/images/class_whitemage.png" title="Light Mage" description="The light mage class" />
    </div>
    <div class="flex m-2 cursor-pointer">
        <CursedCard type="parallax" holographSrc="/images/class_darkmage.png" title="Dark Mage" description="The dark mage class" />
    </div>
</div>