import { Abi, Contract, json } from "starknet";
import CursedAscentABI from "./cursed_ascent_abi.json";
import { CURSED_ASCENT_ADDR } from '$lib/variables/env';

export async function getAvailableCards(account: any) {
    const contract = new Contract(CursedAscentABI as Abi, CURSED_ASCENT_ADDR, account);

    const availableCardsWarrior = await contract.get_available_cards(0x1);
    const availableCardsHunter = await contract.get_available_cards(0x2);
    const availableCardsLight = await contract.get_available_cards(0x3);
    const availableCardsDark = await contract.get_available_cards(0x4);

    return {"warrior" : availableCardsWarrior, "hunter": availableCardsHunter, "light": availableCardsLight, "dark": availableCardsDark};
}