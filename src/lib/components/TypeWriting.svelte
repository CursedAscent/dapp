<script lang="ts">
    import Typewriter from 'svelte-typewriter'
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let interval: number = 100;
    export let delay: number = 0;
    export let unwriteInterval: number = 10;
    export let mode: string = "cascade"
    export let cursorOnFinish: boolean = false;
    export let skippable: boolean = true;

    let innerData: any;

    let disabled = false;

    function animationDone() {
        if (!disabled)
            dispatch('done', { 'message' : "done"});
    }

    function skipAnimation() {
        if (skippable && !disabled) {
            disabled = true;
            let fireNumber = mode === "loopOnce" ? innerData.children.length : 1;

            for (let i=0; i < fireNumber; i++)
                dispatch('done', { 'message' : "done"});
        }
    }

</script>

<!-- <svelte:body on:click={skipAnimation} /> -->

<div on:click={skipAnimation}>
    <Typewriter  disabled={disabled} on:done={animationDone} mode={mode} interval={interval} delay={delay} unwriteInterval={unwriteInterval} keepCursorOnFinish={cursorOnFinish} --cursor-color="#e01b24">
        <slot />
    </Typewriter>
    <div class="hidden" bind:this={innerData}>
        <slot />
    </div>
    {#if disabled}
        <span bind:this={innerData} class="flex flex-col justify-center">
            <slot />
        </span>
    {/if}
</div>
