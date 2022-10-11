<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let mapLevels = [
        ["boss"],
        ["elite", "rest"],
        ["fight"],
        ["fight", "fight"],
        ["fight", "fight"],
        ["fight"]
    ]

    let storiesLeft = mapLevels.length;

    function roomSelected(idFloor: number, idRoom: number) {
        if (idFloor == mapLevels.length - 1)
            dispatch('roomSelected', { 'floor' : mapLevels.length - idFloor, 'room' : idRoom})
    }
</script>

<div class="flex flex-col items-center space-y-4">
    {#each mapLevels as level, idFloor}
    <div class="flex flex-row space-x-4">
        {#each level as room, idRoom}
            <div class="rounded-full border-slate-100 bg-slate-100 p-2 cursor-pointer">
                <div on:click={e => roomSelected(idFloor, idRoom)} class={idFloor < storiesLeft - 1 ? "opacity-30" : "opacity-100"}>
                    <img style="min-width:42px; image-rendering: pixelated;" src={"/images/map_" + room + ".png"} alt="The room icon" />
                </div>
            </div>
        {/each}
    </div>
    {/each}
</div>