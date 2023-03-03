function getHex(value: any) {
    const hex = parseInt(value).toString(16)
    return hex.length == 1 ? "0" + hex : hex;
}

export const convertRgbToHex = (rgb: number[] | string[]) => {
    const red = rgb[0]
    const green = rgb[1]
    const blue = rgb[2]

    const hexColorCode = '#' + getHex(red) + getHex(green) + getHex(blue);
    return hexColorCode;
}