import { observable } from "mobx";
import { json } from "react-router-dom";
import { ButtonStore } from "../../../app/store/injectStores";
import { getButton } from "../utils/getButton";
import { standardButton } from "../utils/standardButton";

export interface interimStyleStorage {
    text: string,
    cssStyles: {
        styles: {
            fontSize: string,
            fontFamily: string,
            color: string,

            paddingVer: string,
            paddingHor: string,

            borderRadius: string,
            cursor: string,
            transition: string,
            backgroundColor: string,
            borderWidth: string,
            borderColor: string,
            
            shadowX: string,
            shadowY: string,
            shadowBlur: string,
            shadowSpread: string,
            shadowColor: string,
        },
        stylesHover: {
            backgroundColorHov: string,
            colorHov: string,
            borderColorHov: string,

            shadowXHov: string,
            shadowYHov: string,
            shadowBlurHov: string,
            shadowSpreadHov: string,
            shadowColorHov: string,
        }
    }
}

interface styles{
    [index: string]: any
}

const InterimStyleStorage = observable({
    InterimButton: <interimStyleStorage>{...standardButton()},

    editInterimButton(style: string, value: string, type: string) {
        const styles: styles = this.InterimButton.cssStyles;
        if (type === 'styles')  {
            styles.styles[`${style}`] = `${value}`;
        }
        else if (type === "stylesHover"){
            styles.stylesHover[`${style}`] = `${value}`;
        }
        ButtonStore.addButton(this.getWorkingButton())
    },

    editTextInButton(text: string){
        if (!text)  return this.InterimButton.text;
        this.InterimButton.text = text;
        ButtonStore.addButton(this.getWorkingButton())
    },
    
    getWorkingButton() {
        return getButton(this.InterimButton);
    },

    getInterimButton(){
        const interimButton = JSON.parse(JSON.stringify(this.InterimButton))
        return interimButton;
    },

    nullifyButton(){
        this.InterimButton = standardButton();
        ButtonStore.addButton(this.getWorkingButton())
    },

    setSaveButton(button: interimStyleStorage){
        this.InterimButton = button;
    },
})

export default InterimStyleStorage;