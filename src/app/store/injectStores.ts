import { injectStores } from "@mobx-devtools/tools";

// MODAL
import ModalErrorStore from "./ModalErrorStore";
import storeTools from "./ToolModalStore";
import ModalConfirmStore from "./ModalConfirmStore";

// GLOBAL STORES
import FavoritesStore from "../../pages/FavoritesPage/store/FavoritesStore";

// WORKING STORES
import packColorsStore from "../../pages/ToolColorsPage/store/ToolColorsStore";
import ButtonStore from '../../pages/CreateButtonPage/store/ButtonStore';

// INTERIM STORES
import PaletteStore from '../../pages/ToolColorsPage/store/PaletteStore';
import InterimStyleStorage from '../../pages/CreateButtonPage/store/InterimStyleStorage'

injectStores({
    ModalErrorStore,
    storeTools,
    ModalConfirmStore,
    
    FavoritesStore,

    packColorsStore,
    ButtonStore,

    PaletteStore,
    InterimStyleStorage,
})

export { ModalErrorStore, storeTools, ModalConfirmStore, FavoritesStore, packColorsStore, ButtonStore, PaletteStore,  InterimStyleStorage }