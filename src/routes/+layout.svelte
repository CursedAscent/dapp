<script>
    import "../app.css";
    import "../animations.custom.css"
    import "../vendor/csshake.min.css"

    import { retrieveConnectedWallet, walletConnected } from "$lib/stores/starknet/stores.js";
	  import { onMount } from "svelte";

    onMount(async () => {
        // Auto mount wallet if connected
        await retrieveConnectedWallet();
    })
</script>
  
<div class="flex flex-col  bg-zinc-900 min-h-screen">
  <div class="flex flex-row justify-end p-2">
    <div class="flex flex-row items-center rounded-full border-slate-100 bg-slate-100 p-2 cursor-pointer">
        {#if $walletConnected}
          <div class="border-green-500 bg-green-500 rounded-full w-4 h-4 mr-2"></div>
          <span>Wallet Connected</span>
        {:else}
          <div class="border-red-500 bg-red-500 rounded-full w-4 h-4 mr-2"></div>
          <span>Wallet Not Connected</span>
        {/if}
    </div>
  </div>
  <slot />
</div>