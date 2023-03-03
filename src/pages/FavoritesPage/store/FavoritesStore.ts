import { observable } from "mobx";
import ModalErrorStore from "../../../app/store/ModalErrorStore";

export interface Favorite {
    title: string,
    id?: number,
    linkSaved: string, 
    element: {}
}

export interface Favorites extends Array<Favorite>{}

const FavoritesStore = observable({
    favorites: <Favorites>[],
    objectInFavorite(object: Favorite) {
        const objectInFavorite = this.favorites.filter((el) => el.title === object.title);
        if (objectInFavorite.length === 0) return false;
        else return true;
    },
    addFavorite(object: Favorite){
        object.id = this.favorites.length;
        this.favorites.push(object)
    },
    delFavorite(object: any){
        this.favorites = this.favorites.filter((el: any) => el.title !== object.title);
    },
    getFavorite(title: string) {
        const favorite = this.favorites.filter((el) => el.title === title);
        if (favorite) {
            return JSON.parse(JSON.stringify(favorite[0]));
        };
        return {title: '',
            id: -1,
            linkSaved: '', 
            element: {}
        };
    }
    
})

export default FavoritesStore;