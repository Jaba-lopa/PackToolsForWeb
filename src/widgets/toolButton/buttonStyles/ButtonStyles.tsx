import { observer } from 'mobx-react';
import { NavLink, Outlet } from 'react-router-dom';
import cl from './ButtonStyles.module.scss';

const ButtonStyles = () => {
    return(
        <div>
            
            <div className={cl.styleTypeWrapper}>

                <NavLink to='styleBtn' className={({isActive}) => isActive ? [cl.styleTypeItem,cl.styleTypeItem_active].join(' ') : cl.styleTypeItem}>Стили кнопки</NavLink>
                <NavLink to='styleHover' className={({isActive}) => isActive ? [cl.styleTypeItem,cl.styleTypeItem_active].join(' ') : cl.styleTypeItem}>Стили при наведении</NavLink>

            </div>

            <div className={cl.styleSection}>
                <Outlet />
            </div>
            
        </div>
    )
}

export default observer(ButtonStyles);