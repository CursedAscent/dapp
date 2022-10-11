<script lang="ts">
    import { fade } from 'svelte/transition'
	import { sleep } from "$lib/helpers/sleep.svelte";
	import { onMount } from 'svelte';

    const funFacts = [
        "Fun Fact: The Cocky Imp has one golden tooth",
        "Hint: You can use a legendary card only once per fight. Use it carefully!",
        "Fun Fact: Even though he would not admit it, 'His Maleficience' secretely loves the color pink",
        "Hint: When you pick a prize, you can discard a card in your deck instead",
        "Hint: It is best to keep your deck small!",
        "Fun Fact: Bats love the confines of cursed spire rooms",
        "Fun Fact: Did you know that rats favorite food is imp toes?",
        "Hint: You can click the address at the bottom of a card to open the collection in voyager!",
        "Fun Fact: Skeletons love milk!",
        "Hint: Don't have time to finish a game? Save your session and load it later!"
    ]

    let selectedFact = "";

    onMount(async () => {
        while (1) {
            let randomIdx = Math.round(Math.random() * (funFacts.length - 1));
            console.log(randomIdx);
            selectedFact = funFacts[randomIdx];
            await sleep(5000);
        }
    });
</script>

<style>
    .bouncing-logo {
        animation: Bounce 2s ease infinite;
        max-width: 200px;
    }
</style>

<div class="flex flew-grow flex-col w-full justify-center items-center backdrop-blur-md bg-black/30">
    <img class="bouncing-logo" src="/images/cursed_skull.png" alt="Cursed Ascent logo" />
    <slot />
    <div class="relative w-full">
        {#key selectedFact}
            <p class="absolute text-slate-400 text-center w-full" in:fade={{ duration: 1000 }} out:fade={{ duration: 300 }}>{selectedFact}</p>
        {/key}
    </div>
</div>