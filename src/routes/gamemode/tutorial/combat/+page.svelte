<script lang="ts">
    import { fly } from 'svelte/transition';
    import AdventurerStats from '$lib/components/AdventurerStats.svelte';
</script>

<div class="w-full flex flex-col items-center p-5">
    <div transition:fly|local="{{ y: 200, duration: 1000 }}" class="flex flex-col w-full items-center space-y-2">
        <div class="flex-grow w-full border-t-2 border-slate-100"></div>
        <div>
            <AdventurerStats />
        </div>
    </div>
</div>