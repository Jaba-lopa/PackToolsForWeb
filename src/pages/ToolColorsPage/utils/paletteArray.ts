import hexToRgba from 'hex-to-rgba';

export const paletteArray = (color: string) => {
    const palette = []
    let count = 30;

    const res = hexToRgba(color).split('(')[1].split(',');
    const rgb = [res[0], res[1], res[2]]
    for (let i = 0; i < 6; i++) { 
        let colorOfPalette: number[] | string = rgb.map((el) => {
            if (Number(el) + count < 0) return Number(el);
            return Number(el) + count
        });
        colorOfPalette = colorOfPalette.join(',');

        palette.push(colorOfPalette);
        if (count === 10) count -= 20;
        else count -= 10;
    }

    return palette;
}