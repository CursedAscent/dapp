export function ipfsUrlToNFTStorageGatewayUrl(ipfsUrl: string) {
    return ipfsUrl.replace("ipfs://", "https://nftstorage.link/ipfs/");
}