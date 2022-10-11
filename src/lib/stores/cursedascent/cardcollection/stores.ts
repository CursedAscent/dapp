import { ipfsUrlToNFTStorageGatewayUrl } from "$lib/helpers/ipfs/gateway";
import { feltArrayToStr, feltToHexStr } from "$lib/helpers/starknet/felt";
import { Abi, Contract, json } from "starknet";
import CardCollectionABI from "./CardCollection_abi.json";

export async function getCardTokenURIHttpURL(account: any, collection_addr: any, token_id: any) {
    const contract = new Contract(CardCollectionABI as Abi, feltToHexStr(collection_addr), account);
    const cardTokenURI = await contract.tokenURI(parseInt(token_id, 16));
    const cardTokenURIMarshalled = feltArrayToStr(cardTokenURI.token_uri);

    return ipfsUrlToNFTStorageGatewayUrl(cardTokenURIMarshalled);
}