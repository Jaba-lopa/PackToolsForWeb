import Palette from "../../../entities/Tool__Colors/palette/Palette";
import BlueButton from "../../../shared/UI/BlueButton/BlueButton";
import cl from './SelectColor.module.scss';

//store

import { ModalErrorStore, packColorsStore, PaletteStore } from '../../../app/store/injectStores';
import { useMemo, useState } from "react";
import { paletteArray } from "../../../pages/ToolColorsPage/utils/paletteArray";
import hexArray from "../../../pages/ToolColorsPage/utils/hexArray";

const SelectColor = ({activeColor}: {activeColor: string}) => {
    const palette = useMemo(() => paletteArray(activeColor), [activeColor]);
    const hexPalette = useMemo(() => hexArray(palette), [palette])

    return(
        <div className={cl.color} style={{backgroundColor: activeColor}}>
            <Palette hexPalette={hexPalette}/>
            
            <div className={cl.color__color}>
                <div className={cl.color__colorText} onClick={(e) => {

                    const element = e.target as HTMLElement;

                    if (!packColorsStore.isColorInPack(element.innerText)) {
                        packColorsStore.addPackColors(element.innerText);
                    }
                    else ModalErrorStore.OnModalError('Такой цвет в паке уже есть')

                }}>{activeColor}</div>
                
                <BlueButton 
                    className={cl.color__palette}
                    onClick={() => {
                        PaletteStore.setPalette();
                    }}
                >Палитра</BlueButton>
            </div>
        </div>
    )
}

export default SelectColor;