<script lang="ts">
    import { fade } from 'svelte/transition'
</script>

<style>
    .pixel-borders {
        box-shadow:   -10px 0 0 0 white,
            10px 0 0 0 white,
            0 -10px 0 0 white,
            0 10px 0 0 white;
    }
</style>

<div in:fade class="flex grow flex-col items-center p-5">
    <div class="flex grow pixel-borders w-full max-w-5xl bg-zinc-800">
        <slot />
    </div>
</div>