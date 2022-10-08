import { connect } from "get-starknet"
import { writable } from 'svelte/store';

export const starknet = writable();
export const walletConnected = writable(false);

export async function connectWallet() {
    console.log("in connect wallet");
    var inst = await connect();

    if (inst) {
        await inst.enable();
        walletConnected.set(true);
        starknet.set(inst);
    } 
}

