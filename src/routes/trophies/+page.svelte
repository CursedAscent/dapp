<script lang="ts">
</script>

<div class="flex flex-col flex-grow w-full content-center">
    <h2 class="text-slate-100 text-3xl text-center">Your trophies</h2>
    <div class="flex flex-grow flex-wrap justify-center mt-4 p-4">
        <div class="flex flex-col justify-center max-h-60 sm:max-h-80 max-w-xs w-full max-h-sm pixel-borders-slim">
            <model-viewer
                class="w-full h-full"
                alt="The golden imp pin earnt from completing the tutorial"
                src="3d/imp_pin.glb"
                disable-tap
                touch-action="pan-y"
                camera-controls
                camera-orbit="0deg 75deg 80%"
                auto-rotate
                rotation-per-second="0.5rad">
            </model-viewer>
            <h2 class="text-xl text-slate-100 text-center">Cocky Imp Pin</h2>
            <h3 class="text-slate-300 text-center">Unlocked 16 Nov, 2022 @ 8:02am</h3>
            <h3 class="text-slate-300 text-center">0x4f4aa...9cc4f</h3>
        </div>
    </div>
</div>