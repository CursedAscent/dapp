<script lang="ts">
	import { ipfsUrlToNFTStorageGatewayUrl } from "$lib/helpers/ipfs/gateway";
	import { getMetadataFromHttpURL } from "$lib/helpers/ipfs/metadata";
	import { getCardTokenURIHttpURL } from "$lib/stores/cursedascent/cardcollection/stores";
	import { getAvailableCards } from "$lib/stores/cursedascent/gamemode/stores";
	import { walletConnected, starknetInst } from "$lib/stores/starknet/stores";
    import CursedCard from "$lib/components/CursedCard.svelte";
	import { initializeTilt } from "$lib/components/TiltInitializer.svelte";
    import { fade } from 'svelte/transition'

    let cardsWarrior: any[] = [];
    let cardsHunter: any[] = [];
    let cardsLight: any[] = [];
    let cardsDark: any[] = [];

    async function _getCardsFromRefs(cardInsts: any) {
        let cards = [];

        for (const ref of cardInsts) {
            const cardTokenURI = await getCardTokenURIHttpURL($starknetInst.account, ref.card_ref.collection_addr, ref.card_ref.token_id.toString(16));
            const metadataJSON = await getMetadataFromHttpURL(cardTokenURI);
            const cardImageURL = ipfsUrlToNFTStorageGatewayUrl(ipfsUrlToNFTStorageGatewayUrl(metadataJSON.image));

            cards.push({url: cardImageURL, name: metadataJSON.name, description: metadataJSON.description});
        }

        return cards;
    }

    async function initializeLibrary() {
        const availableCardRefs = await getAvailableCards($starknetInst.account);
        
        console.log(availableCardRefs.warrior);

        cardsWarrior = await _getCardsFromRefs(availableCardRefs.warrior.cards);
        cardsHunter = await _getCardsFromRefs(availableCardRefs.hunter.cards);
        cardsLight = await _getCardsFromRefs(availableCardRefs.light.cards);
        cardsDark = await _getCardsFromRefs(availableCardRefs.dark.cards);

        console.log(cardsWarrior);
    }

    $: if ($walletConnected) {
            initializeLibrary();
    }
</script>

<div class="relative flex flex-grow flex-wrap justify-center">
    <div class="flex w-full justify-center">
        <h2 class="text-slate-100 text-3xl">Warrior Class</h2>
    </div>
    {#each cardsWarrior as card}
        <div in:fade|local class="m-2">
            <CursedCard type="basic" imageURL="{card.url}" title="{card.name}" description="{card.description}" />
        </div>
    {/each}
    <div class="flex w-full justify-center">
        <h2 class="text-slate-100 text-3xl">Hunter Class</h2>
    </div>
    {#each cardsHunter as card}
        <div in:fade|local class="m-2">
            <CursedCard type="basic" imageURL="{card.url}" title="{card.name}" description="{card.description}" />
        </div>
    {/each}
    <div class="flex w-full justify-center">
        <h2 class="text-slate-100 text-3xl">Light Mage Class</h2>
    </div>
    {#each cardsLight as card}
        <div in:fade|local class="m-2">
            <CursedCard type="basic" imageURL="{card.url}" title="{card.name}" description="{card.description}" />
        </div>
    {/each}
    <div class="flex w-full justify-center">
        <h2 class="text-slate-100 text-3xl">Dark Mage Class</h2>
    </div>
    {#each cardsDark as card}
        <div in:fade|local class="m-2">
            <CursedCard type="basic" imageURL="{card.url}" title="{card.name}" description="{card.description}" />
        </div>
    {/each}
</div>