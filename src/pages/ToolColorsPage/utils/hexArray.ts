import { convertRgbToHex } from "./convertRgbToHex";

const hexArray = (mass: number[] | string[]) => {
    const hexPalette = <any>[]

    mass.forEach((item: any) => {
        hexPalette.push(convertRgbToHex(item.split(',')))
    })

    return hexPalette;
}

export default hexArray;