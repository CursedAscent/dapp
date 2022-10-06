<script>
	import CursedButton from "./CursedButton.svelte";
</script>

<div class="flex flex-row max-w-sm space-x-2">
    <img style="max-width: 200px" src="/images/class_hunter.png" alt="The adventurer's class" />
    <div class="flex flex-col items-center">
        <h2 class="text-slate-100 text-2xl" style="margin-top: -5px;">Adventurer</h2>
        <span class="text-slate-100 text-lg mb-1">100/100 HP</span>
        <div class="mb-1">
            <CursedButton text="Save Session" />
        </div>
    </div>
</div>