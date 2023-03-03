import { observer } from 'mobx-react';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import cl from './FavoritesItem.module.scss';

// store
import { FavoritesStore } from '../../../app/store/injectStores';

interface Favorite {
    title: string,
    id: number,
    linkSaved: string,
    element: {}
}

interface FavoritesItem {
    index: string | number,
    favorite: Favorite
}

const FavoritesItem = ({index, favorite}: FavoritesItem) => {
    return(
        <div className={cl.favoritesItem}>

            <Link to={favorite.linkSaved} className={cl.favoriteTitle} state={favorite.title}>
                <span>{index}. </span>
                <div>{favorite.title}</div>
            </Link>
            
            <div className={cl.favoriteDel} onClick={() => {
                FavoritesStore.delFavorite({title: favorite.title})
            }}>
                Удалить
            </div>

        </div>
    )
}

export default observer(FavoritesItem);