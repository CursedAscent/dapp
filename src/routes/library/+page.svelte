<script lang="ts">
    import { afterUpdate } from 'svelte';
	import { ipfsUrlToNFTStorageGatewayUrl } from "$lib/helpers/ipfs/gateway";
	import { getMetadataFromHttpURL } from "$lib/helpers/ipfs/metadata";
	import { getCardTokenURIHttpURL } from "$lib/stores/cursedascent/cardcollection/stores";
	import { getAvailableCards } from "$lib/stores/cursedascent/gamemode/stores";
	import { walletConnected, starknetInst } from "$lib/stores/starknet/stores";
    import CursedCard from "$lib/components/CursedCard.svelte";
    import CursedLoading from "$lib/components/CursedLoading.svelte";
	import { initializeTilt } from "$lib/components/TiltInitializer.svelte";
    import { fade } from 'svelte/transition'
	import { sleep } from "$lib/helpers/sleep.svelte";

    let cardsWarrior: any[] = [];
    let cardsHunter: any[] = [];
    let cardsLight: any[] = [];
    let cardsDark: any[] = [];

    let cardsLoaded = false;
    let totalCardsLoaded = 0;
    let totalURLLoaded = 0;

    async function _getCardsFromRefs(cardInsts: any) {
        let cards = [];
        let preloadedImages = [];

        for (const ref of cardInsts) {
            const cardTokenURI = await getCardTokenURIHttpURL($starknetInst.account, ref.card_ref.collection_addr, ref.card_ref.token_id.toString(16));
            const metadataJSON = await getMetadataFromHttpURL(cardTokenURI);
            const cardImageURL = ipfsUrlToNFTStorageGatewayUrl(ipfsUrlToNFTStorageGatewayUrl(metadataJSON.image));

            preloadedImages.push(new Image());
            preloadedImages[preloadedImages.length - 1].src = cardImageURL;
            preloadedImages[preloadedImages.length - 1].onload = () => { totalURLLoaded += 1 };

            cards.push({url: cardImageURL, rarity: ref.rarity, name: metadataJSON.name, description: metadataJSON.description, id: ref.card_ref.collection_addr.toString(16) + ":" + ref.card_ref.token_id.toString(16)});

            totalCardsLoaded += 1;
        }

        return cards;
    }

    async function initializeLibrary() {
        const availableCardRefs = await getAvailableCards($starknetInst.account);

        cardsWarrior = await _getCardsFromRefs(availableCardRefs.warrior.cards);
        cardsHunter = await _getCardsFromRefs(availableCardRefs.hunter.cards);
        cardsLight = await _getCardsFromRefs(availableCardRefs.light.cards);
        cardsDark = await _getCardsFromRefs(availableCardRefs.dark.cards);

        cardsLoaded = true;
    }

    async function initializeAnimations() {
        await sleep(1000); // Deferred initialization for cards
        
        initializeTilt();
    }

    $: if ($walletConnected) {
        initializeLibrary();
    }

    let chit = 0;

    afterUpdate(() => {
        if (cardsLoaded && totalCardsLoaded == 52) {
            if (chit > 0)
                initializeAnimations();
            else
                chit++;
        }
    })

</script>

{#if cardsLoaded && totalURLLoaded == 52}
<div in:fade|local class="relative flex flex-grow flex-wrap justify-center">
    <div class="flex w-full justify-center">
        <h2 class="text-slate-100 text-3xl">Warrior Class</h2>
    </div>
    {#each cardsWarrior as card}
        <div class="m-2">
            <CursedCard type="rare" imageURL="{card.url}" title="{card.name}" description="{card.description}" contractID="{card.id}" />
        </div>
    {/each}
    <div class="flex w-full justify-center">
        <h2 class="text-slate-100 text-3xl">Hunter Class</h2>
    </div>
    {#each cardsHunter as card}
        <div class="m-2">
            <CursedCard type="rare" imageURL="{card.url}" title="{card.name}" description="{card.description}" contractID="{card.id}" />
        </div>
    {/each}
    <div class="flex w-full justify-center">
        <h2 class="text-slate-100 text-3xl">Light Mage Class</h2>
    </div>
    {#each cardsLight as card}
        <div class="m-2">
            <CursedCard type="rare" imageURL="{card.url}" title="{card.name}" description="{card.description}" contractID="{card.id}" />
        </div>
    {/each}
    <div class="flex w-full justify-center">
        <h2 class="text-slate-100 text-3xl">Dark Mage Class</h2>
    </div>
    {#each cardsDark as card}
        <div class="m-2">
            <CursedCard type="rare" imageURL="{card.url}" title="{card.name}" description="{card.description}" contractID="{card.id}" />
        </div>
    {/each}
</div>
{:else}
    <div class="flex flex-grow">
        <CursedLoading>
            {#if !cardsLoaded}
                <p class="text-slate-100 text-xl">Loaded {totalCardsLoaded} / 52 Cards</p>
            {:else}
                <p class="text-slate-100 text-xl">Prefetching card data from IPFS gateway : {totalURLLoaded} / 52 Cards</p>
            {/if}
        </CursedLoading>
    </div>
{/if}