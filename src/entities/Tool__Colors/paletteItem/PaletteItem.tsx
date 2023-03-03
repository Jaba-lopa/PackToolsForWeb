import { memo } from 'react';
import cl from './PaletteItem.module.scss';

//store
import { packColorsStore } from '../../../app/store/injectStores'
interface PaletteItem {
    el: string
}

const PaletteItem = ({el}: PaletteItem) => {
    return(
        <div 
            className={cl.paletteItem} 
            style={{
                backgroundColor: el,
                color: 'black'
            }}
            onClick={(e) => {
                const element = e.target as HTMLElement;
                if (!packColorsStore.getColor(element.innerText))  packColorsStore.addPackColors(element.innerText)
            }}
        >{el}</div>
    )
}

export default PaletteItem;