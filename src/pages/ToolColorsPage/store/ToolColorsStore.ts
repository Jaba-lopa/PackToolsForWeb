import { observable } from "mobx";

interface PackColorsItem {
    title: string,
    body?: string,
}

interface arrayColors extends Array<PackColorsItem>{}

const packColorsStore = observable({
    packColors: {
        title: '',
        arrayColors: <arrayColors>[]
    },
    addPackColors(color: string, body?: string): void{
        if (!this.isColorInPack(color)) {
            this.packColors.arrayColors.push({
                title: color,
                body: body,
            });
        }
    },
    delPackColors(color: string): void {
        this.packColors.arrayColors = this.packColors.arrayColors.filter((el) => el.title !== color);
    },
    isColorInPack(color: string){
        const res = this.packColors.arrayColors.filter((item) => item.title === color);
        if (res.length === 0) return false;
        return true;
    },
    getColor(color: string){
        const res = this.packColors.arrayColors.filter((item) => item.title === color);
        if (res.length === 0) return false;
        return res[0];
    },
    editPackColors(color: string, body: string){
        this.delPackColors(color);
        this.addPackColors(color, body);
    },
    changePackTitle(title:string){
        this.packColors.title = title;
    },
    changePackArray(array: arrayColors) {
        this.packColors.arrayColors = [...array];
    },
    getPackTitle(){
        return this.packColors.title;
    }
})

export default packColorsStore;