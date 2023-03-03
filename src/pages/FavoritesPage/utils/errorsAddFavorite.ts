import { FavoritesStore, ModalErrorStore } from '../../../app/store/injectStores';

interface favorite {
    title: string,
    id?: number,
    linkSaved: string,
    element: {}
}

export function errorsAddFavorite (object: favorite) {
    if (!object.title) return ModalErrorStore.OnModalError('У объекта нет названия')
    if (FavoritesStore.objectInFavorite(object)) return ModalErrorStore.OnModalError('Такой объект в избранных уже есть')
    FavoritesStore.addFavorite(object);
}