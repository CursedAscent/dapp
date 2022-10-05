<script lang="ts">
    import Typewriter from 'svelte-typewriter'
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let interval: number = 100;
    export let delay: number = 0;
    export let unwriteInterval: number = 10;
    export let mode: String = "cascade"
    export let cursorOnFinish: boolean = true;

</script>


<Typewriter on:done={() => dispatch('done', { 'message' : "done"})} mode={mode} interval={interval} delay={delay} unwriteInterval={unwriteInterval} keepCursorOnFinish={cursorOnFinish} --cursor-color="#e01b24">
    <slot />
</Typewriter>
