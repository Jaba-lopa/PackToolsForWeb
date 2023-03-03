import { observer } from 'mobx-react';
import PaletteItem from '../paletteItem/PaletteItem';
import cl from './Palette.module.scss';

//store
import { PaletteStore } from '../../../app/store/injectStores'

const Palette = ({hexPalette}: {hexPalette: string[]}) => {
    return(
        <div 
        className={PaletteStore.isActivePalette
            ?   [cl.paletteWrapper, cl.activePalette].join(' ')
            :   [cl.paletteWrapper, cl.deactivePalette].join(' ')
        }
        >
            {hexPalette.map((el: string, i: number) =>
                <PaletteItem el={el} key={i}/>
            )}
        </div>
    )
}

export default observer(Palette);