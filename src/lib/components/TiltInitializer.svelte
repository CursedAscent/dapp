<script lang="ts" context="module">
    import VanillaTilt from "vanilla-tilt";

    export function initializeTilt() {
        // Basic Cards
        // @ts-ignore
        VanillaTilt.init(document.querySelectorAll(".tilting-basic-card"), {
            max: 25,
            speed: 400,
            scale: 1.25,
            'glare-prerender': false
        })

        // Rare Cards
        // @ts-ignore
        VanillaTilt.init(document.querySelectorAll(".tilting-rare-card"), {
            max: 25,
            speed: 400,
            scale: 1.25,
            glare: true,
            'glare-prerender': false
        })
    }
</script>