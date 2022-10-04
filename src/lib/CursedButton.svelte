<script lang="ts">
	import AnimatedText from "./AnimatedText.svelte";

    export let text: String;
    export let textType: String = "still";
</script>

<style>
    .pixel-borders {
    box-shadow:   -3px 0 0 0 white,
                3px 0 0 0 white,
                0 -3px 0 0 white,
                0 3px 0 0 white;
    }
</style>

<button class="text-slate-100 pixel-borders p-2">
    <AnimatedText text="{text}" type={textType} />
</button>
