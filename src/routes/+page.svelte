<script lang="ts">
    import CursedButton from "$lib/components/CursedButton.svelte";
    import { walletConnected, connectWallet } from "$lib/stores/starknet/stores";
    import { goto } from '$app/navigation';

    async function connectUserWallet() {
        await connectWallet();

        if ($walletConnected) {
            goto("/pickgame");
        }
    }
</script>

<style>
    .skull-logo-animate {
        animation: MoveUpDown 3s ease infinite;
    }
</style>

<div class="relative flex flex-col flex-grow items-center justify-center">
    <div class="flex flex-col items-center max-w-5xl">
        <img class="absolute max-w-sm skull-logo-animate" src="images/cursed_skull.png" alt="Cursed Ascent skull logo" />
        <img class="mt-8 max-w-sm" src="images/cursed_pentagram.png" alt="Cursed Ascent pentagram logo">
        <img class="max-w-sm" src="images/cursed_title.png" alt="Cursed Ascent logo title">
        <h1 class="text-slate-100 text-2xl text-center mt-8">A decentralized deckbuilding roguelike game based on Realms: Adventurers and running on Starknet.<br/> Built during MatchboxDAO Hackathon #2.</h1>
        <div class="mt-8">
            <div on:click={e => connectUserWallet()}>
                <CursedButton text="Dare enter the spire?" textType="wave" />
            </div>
        </div>
    </div>
</div>