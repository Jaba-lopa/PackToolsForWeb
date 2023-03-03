import { observer } from 'mobx-react';
import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { InterimStyleStorage, ModalConfirmStore } from '../../../app/store/injectStores';
import { errorsAddFavorite } from '../../../pages/FavoritesPage/utils/errorsAddFavorite';
import FolderSVG from '../../../shared/UI/folderSVG/FolderSVG';
import ResetSVG from '../../../shared/UI/resetSVG/ResetSvg'
import cl from './ButtonToolbar.module.scss';

const ButtonToolbar = () => {

    const location = useLocation();

    const state = useMemo(() => {
        if (location && location.state) {
            return location.state;
        } else return ''
    }, [location])

    const [title, setTitle] = useState(state);

    const [text, setText] = useState(InterimStyleStorage.InterimButton.text);

    return(
        <div className={cl.buttonToolbar}>
            
            <div className={cl.buttonToolbar__name}>
                <input type="text" placeholder='Введите название...' value={title} onChange={(e) => {setTitle(e.target.value)}}/>

                <div>
                    <ResetSVG onClick={() => {
                        ModalConfirmStore.OnModalConfirm('обновить кнопку, сбросив все настройки', () => {
                            InterimStyleStorage.nullifyButton()
                        })
                    }}/>
                    <FolderSVG onClick={() => {
                        const buttonContent = InterimStyleStorage.getInterimButton()

                        const button = {
                            title: title,
                            linkSaved: '/createButton',
                            element: {
                                button: buttonContent
                            }
                        }
                        
                        errorsAddFavorite({...button});
                    }}/>
                </div>
            </div>

            <div className={cl.buttonToolbar__tool}>
                <div>Текст кнопки</div>
                <input type="text" value={text} onChange={(e) => {
                    setText(e.target.value)
                    InterimStyleStorage.editTextInButton(e.target.value)
                }} placeholder='Введите текст...'/>
            </div>

            <div className={cl.buttonToolbar__tool}>
                <Link to="/createButton/stylesBtn">Стили кнопки</Link>
            </div>

            <div className={cl.buttonToolbar__tool}>
                <Link to='/createButton/animationBtn'>Анимации</Link>
            </div>

            <div className={cl.buttonToolbar__tool}>
                <Link to='/createButton/code'>Код</Link>
            </div>

        </div>
    )
}

export default ButtonToolbar;