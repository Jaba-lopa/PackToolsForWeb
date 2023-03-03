import { observable } from "mobx";

const PaletteStore = observable({
    isActivePalette: false,
    setPalette(){
        this.isActivePalette = !this.isActivePalette;
    }
})

export default PaletteStore;