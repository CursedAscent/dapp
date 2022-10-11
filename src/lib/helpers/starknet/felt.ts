export function feltToHexStr(felt: any) {
    return "0x" + felt.toString(16);
}

export function feltArrayToStr(felt: any[]) {
    return String.fromCharCode(...felt);
}