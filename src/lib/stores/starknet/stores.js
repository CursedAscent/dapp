import { connect } from "@argent/get-starknet";
import { writable } from 'svelte/store';

export const starknetInst = writable();
export const walletConnected = writable(false);

// Tries to retrieved an account that is already connected to the dapp
export async function retrieveConnectedWallet() {
    const account = await connect({ showList: false });

    if (account) {
        await account.enable();
        walletConnected.set(true);
        starknetInst.set(account);
    }
}

export async function connectWallet() {
    var inst = await connect();

    if (inst) {
        await inst.enable();
        walletConnected.set(true);
        starknetInst.set(inst);
    } 
}

