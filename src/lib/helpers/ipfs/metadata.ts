export async function getMetadataFromHttpURL(url: string) {
    const response = await fetch(url);

    return await response.json();
}