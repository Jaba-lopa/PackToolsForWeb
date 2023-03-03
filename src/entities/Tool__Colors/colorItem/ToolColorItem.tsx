import cl from './ToolColorItem.module.scss';
import svg from '../../../assets/delete.svg';

import FolderSVG from '../../../shared/UI/folderSVG/FolderSVG';
import { memo, useState } from 'react';

// store

import { packColorsStore, FavoritesStore, ModalErrorStore } from '../../../app/store/injectStores';

interface ToolColorItem {
    color: string,
    body?: string,
}

const ToolColorItem = memo(({color, body}: ToolColorItem) => {
    const [bodyColor, setBodyColor] = useState(body || '')

    return(
        <div>
            <div className={cl.packColors__item}>

                <div className={cl.item__color} style={{backgroundColor: color}}>{color}</div>

                <div className={cl.item__input}>
                    <input type="text" value={bodyColor} onChange={(e) => {
                        setBodyColor(e.target.value)
                        packColorsStore.editPackColors(color, e.target.value)
                    }} placeholder="Описание..."/>

                    <div className={cl.item__delete} onClick={() => packColorsStore.delPackColors(color)} >
                        <img src={svg}/>
                    </div>

                    <FolderSVG onClick={()=>{
                        const object = {
                            title: color,
                            linkSaved: '/toolColors',
                            element: {
                                color: {
                                    title: color,
                                    body: bodyColor
                                }
                            }
                        }
                        if (!FavoritesStore.objectInFavorite(object)) FavoritesStore.addFavorite(object)
                        else ModalErrorStore.OnModalError('Такой объект в избранных уже есть')
                    }}/>
                </div>

            </div>
        </div>
    )
})

export default ToolColorItem;