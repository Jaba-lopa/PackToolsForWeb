import { useEffect } from "react";
import ToolTitle from "../../shared/UI/ToolTitle/ToolTitle";
import { ButtonStore, InterimStyleStorage } from "../../app/store/injectStores";
import { Outlet, useLocation } from "react-router-dom";
import { FavoritesStore } from '../../app/store/injectStores';
import ActiveTool from "../../features/activeTool/ActiveTool";
import ButtonTemplate from "../../widgets/toolButton/buttonTemplate/ButtonTemplate";
import ButtonToolbar from "../../widgets/toolButton/buttonToolbar/ButtonToolbar";
import cl from './CreateButtonPage.module.scss';

const CreateButtonPage = () => {

    const location = useLocation();

    useEffect(() => {
        if (location && location.pathname === '/createButton' && location.state) {
            const favoriteTitle = location.state;
            const favorite = FavoritesStore.getFavorite(favoriteTitle);
            InterimStyleStorage.setSaveButton(favorite.element.button);
        }
        ButtonStore.addButton(InterimStyleStorage.getWorkingButton());
    },[location])

    return(
        <div>
            <ToolTitle>
                Create button
            </ToolTitle>
            
            <ActiveTool>

                <div className={cl.getButton}>
                    <ButtonTemplate />
                    <ButtonToolbar />
                </div>

                <div>
                    <Outlet />
                </div>

            </ActiveTool>
        </div>
    )
}

export default CreateButtonPage;