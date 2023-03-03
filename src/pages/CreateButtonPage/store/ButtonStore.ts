import { observable } from "mobx";

interface button {
    text: string,
    cssStyles: {
        styles: {
            fontSize: string,
            fontFamily: string,
            padding: string,
            borderRadius: string,
            cursor: string,
            border: string,
            transition: string,
            backgroundColor: string,
            color: string
        },
        stylesHover: {
            backgroundColor?: string,
            color?: string,
            borderColor?: string,
        }
    }
}

const ButtonStore = observable({
    button: <button>{},
    addButton(btn: button){
        this.button = {...btn}
    },
    isButton(){
        return Boolean(this.button)
    },
    getStyles(){
        if (this.button && this.button.cssStyles) return this.button.cssStyles.styles || {};
    },
    getStylesHover(){
        if (this.button && this.button.cssStyles) return this.button.cssStyles.stylesHover || {};
    }
})

export default ButtonStore;