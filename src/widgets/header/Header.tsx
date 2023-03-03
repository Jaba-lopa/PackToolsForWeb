import ModalTools from '../modalTools/ModalTools';
import cl from './Header.module.scss';

import { observer } from "mobx-react";  
import { Link } from 'react-router-dom';

import favoriteSvg from '../../assets/favorite.svg';

// store

import { storeTools, FavoritesStore } from '../../app/store/injectStores';

const Header = ({selectModal}: any) => {

    return(
        <header onClick={selectModal}>
            <div className={cl.headerWrapper}>
                <div className={cl.toolKit} onClick={() => {
                    storeTools.setToolModal();
                }}>
                    Tools
                </div>

                {storeTools.toolModal
                    ? <ModalTools />
                    : <div></div>
                }                

                <Link to="/favorites" className={cl.favorites} onClick={() => console.log(FavoritesStore.favorites)}>
                    Избранное
                    <span className={cl.countFavorites}>
                        <img src={favoriteSvg}/>
                        <div>{FavoritesStore.favorites.length}</div>
                    </span>
                </Link>
            </div>
        </header>
    )
}

export default observer(Header);