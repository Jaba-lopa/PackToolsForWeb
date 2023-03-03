import FavoritesItem from "../../entities/Favorites/FavoritesItem/FavoritesItem";
import { FavoritesStore } from '../../app/store/injectStores';

import cl from './FavoritesWrapper.module.scss';
import { observer } from "mobx-react";

const FavoritesWrapper = () => {
    return(
        <div className={cl.favoritesWrapper}>

            {FavoritesStore.favorites.length
                ?   FavoritesStore.favorites.map((favorite: any, i: number) => 
                        <FavoritesItem key={i+1} index={i+1} favorite={favorite}/>
                    )
                : <div className={cl.favoritesNull}>Пусто</div>
            }

        </div>
    )
}

export default observer(FavoritesWrapper);