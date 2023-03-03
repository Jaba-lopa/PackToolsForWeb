import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import ToolColorItem from '../../../entities/Tool__Colors/colorItem/ToolColorItem';
import FolderSVG from '../../../shared/UI/folderSVG/FolderSVG';
import { errorsAddFavorite } from '../../../pages/FavoritesPage/utils/errorsAddFavorite';
import cl from './PackColors.module.scss';

// STORES

import { packColorsStore, ModalErrorStore } from '../../../app/store/injectStores';

const PackColors = () => { 
    const [packTitle, setPackTitle] = useState(packColorsStore.getPackTitle());
    
    return(
        <div className={cl.packColors}>
            <div className={cl.packColors__name}>

                <input type="text" placeholder="Название пака..." value={packTitle} onChange={(e) => {
                    setPackTitle(e.target.value);
                    packColorsStore.changePackTitle(e.target.value)
                }}/>

                <FolderSVG onClick={()=>{
                    const object = {
                        title: packTitle,
                        linkSaved: '/toolColors',
                        element: {
                            array: [...packColorsStore.packColors.arrayColors]
                        }
                    }
                    if (!object.element.array.length) ModalErrorStore.OnModalError('Пак пустой')
                    else errorsAddFavorite(object);
                }}/>

            </div>

            {packColorsStore.packColors.arrayColors.length
                ?   packColorsStore.packColors.arrayColors.map((color) => 
                        <ToolColorItem key={color.title} color={color.title} body={color.body}/>
                    )
                : <div className={cl.packNull}>Пак пустой</div>
            }
        </div>
    )
}

export default observer(PackColors);