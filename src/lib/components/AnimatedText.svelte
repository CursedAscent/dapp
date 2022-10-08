<script lang="ts">
	import { fade } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

    export let text: String;
    export let type: String = "still";
    export let size: string = "normal";
</script>

<style>
    .letters-wave span {
        position: relative; 
        display: inline-block;
        animation: WaveLow 1s ease infinite;
        z-index: 1;
    }

    .letters-wave span:nth-child(10n+1) {
        animation-delay: -1s
    }
    .letters-wave span:nth-child(10n+2) {
        animation-delay: -.9s
    }
    .letters-wave span:nth-child(10n+3) {
        animation-delay: -.8s
    }
    .letters-wave span:nth-child(10n+4) {
        animation-delay: -.7s
    }
    .letters-wave span:nth-child(10n+5) {
        animation-delay: -.6s
    }
    .letters-wave span:nth-child(10n+6) {
        animation-delay: -.5s
    }
    .letters-wave span:nth-child(10n+7) {
        animation-delay: -.4s
    }
    .letters-wave span:nth-child(10n+8) {
        animation-delay: -.3s
    }
    .letters-wave span:nth-child(10n+9) {
        animation-delay: -.2s
    }
    .letters-wave span:nth-child(10n+10) {
        animation-delay: -.1s
    }

</style>

{#if type == "shake"}
<div class="shake shake-constant--hover">{text}</div>
{:else if type == "wave"}
    <div class="letters-wave">
        {#each text as letter}
            {#if letter == ' '}
                <span class={size == 'big' ? 'text-2xl px-0.5': 'px-0.5'}></span>
            {:else}
                <span class={size == 'big' ? 'text-2xl': ''}>{letter}</span>
            {/if}
        {/each}
    </div>
{:else}
    <div>{text}</div>
{/if}