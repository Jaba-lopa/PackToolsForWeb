import { useLocation } from "react-router-dom";
import ToolTitle from "../../shared/UI/ToolTitle/ToolTitle";
import { useEffect, useMemo, useState } from "react";
import ActiveTool from "../../features/activeTool/ActiveTool";
import BlueButton from "../../shared/UI/BlueButton/BlueButton";
import InputSearch from "../../shared/UI/InputSearch/InputSearch";
import cl from './ToolColorsPage.module.scss';
import { useRandom } from "../../pages/ToolColorsPage/hooks/useRandom";

import PackColors from "../../widgets/toolColor/PackColors/PackColors";
import SelectColor from "../../widgets/toolColor/selectColor/SelectColor";
import { FavoritesStore, packColorsStore } from '../../app/store/injectStores';

const ToolColorsPage = () => {
    const location = useLocation();

    useMemo(() => {
        try{
            if (location && location.pathname === '/toolColors' && location.state) {
                const favoriteTitle = location.state;
                const favorite = FavoritesStore.getFavorite(favoriteTitle);

                if (favorite.element.array) {
                    packColorsStore.changePackTitle(favoriteTitle);
                    packColorsStore.changePackArray(favorite.element.array);
                } else {
                    packColorsStore.changePackTitle('');
                    const color = {
                        title: favorite.element.color.title,
                        body: favorite.element.color.body
                    }
                    packColorsStore.changePackArray([color])
                }

            }
        } catch(err) {}
    }, [location])

    const [activeColor, setActiveColor] = useState(useRandom());

    return(
        <div>
            <ToolTitle>
                Tool Colors
            </ToolTitle>

            <ActiveTool>

                <div className={cl.getColor}>
                    <SelectColor activeColor={activeColor}/>
                    <PackColors />
                </div>

                <div className={cl.toolbar}>
                    <div className={cl.toolbar_button}>
                        <BlueButton onClick={() => {
                        setActiveColor(useRandom());
                        }}
                        >Reset
                        </BlueButton>
                    </div>

                    <form 
                        // onSubmit={(e) => {
                        //     e.preventDefault();
                        //     const form = e.target;
                        //     console.log(form.)
                        //     const query = form.value;
                        // }} 
                        
                        className={cl.toolbar_searchColor}
                        >
                        <InputSearch name="searchColor" placeholder="hex" fontSize="1rem" maxLength={7}/>
                    </form>
                </div>

            </ActiveTool>

        </div>
    )
}

export default ToolColorsPage;