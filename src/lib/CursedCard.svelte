<script lang="ts">
    export let title: String = "An action title";
    export let description: String = "Sample Description";
    export let type: String = "info";
    export let holographSrc: string = "";

    let hovered = 0;
    const hovering = () => {
        hovered = 1;
	}
    const exiting = () => {
        hovered = 0;
    }
</script>

<style>
    .card-container {
        min-width: 250px;
    }

    .card-container-holo {
        width: 350px;
        min-height: 500px;
        background-size:cover;
        transform-style: preserve-3d;
        transform: perspective(1000px);
        background-image: url("/images/cursed_card_empty.png");
    }

    .card-container-holo-sm {
        width: 250px;
        min-height: 500px;
        background-size:cover;
        transform-style: preserve-3d;
        transform: perspective(1000px);
        background-image: url("/images/cursed_card_empty.png");
    }

    .card-container-holo-img {
        position: absolute;
        top: 100px;
        left: 50px;
        max-width: 252px;
        transform: translateZ(20px);
    }

    .card-hovered-0 {
        z-index: 1;
    }

    .card-hovered-1 {
        z-index: 999;
    }

    .card-info-title {
        position: absolute;
        top: 30px;
        padding: 8px;
        width: 100%;
        text-align: center;
        color:white;
        font-family: "VT323";
        font-size: 36px;
    }

    .card-info-desc {
        position: absolute;
        top: 45%;
        padding: 18px;
        color:white;
        font-family: "VT323";
        font-size: 24px;
        width: 100%;
        text-align: center;
        vertical-align: middle;
    }

    .card-info-desc-holo {
        position: absolute;
        top: 55%;
        padding: 18px;
        color:white;
        font-family: "VT323";
        font-size: 24px;
        width: 100%;
        text-align: center;
        vertical-align: middle;
    }
</style>

{#if type == "info"}
<div class="tilting-basic-card flex relative card-container card-hovered-{hovered}" on:mouseenter={hovering} on:mouseleave={exiting}>
    <img src="/images/cursed_card_empty.png" alt="A card describing an action" />
    <h2 class="card-info-title">{title}</h2>
    <p class="card-info-desc">{description}</p>
</div>
{:else if type == "parallax"}
<div class="tilting-basic-card flex relative card-container-holo card-hovered-{hovered}" on:mouseenter={hovering} on:mouseleave={exiting}>
    <img class="card-container-holo-img" src="{holographSrc}" alt="A card displaying the warrior class" />
    <h2 class="card-info-title" style="transform: translateZ(20px);">{title}</h2>
    <p class="card-info-desc-holo" style="transform: translateZ(20px);">{description}</p>
</div>
{/if}