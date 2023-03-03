import { observable } from "mobx";

const ModalErrorStore = observable({
    isModalError: false,
    error: '',
    OnModalError(error: string){
        this.isModalError = true;
        this.error = error;
    },
    OffModalError(){
        this.isModalError = false;
        this.error = '';
    }
})

export default ModalErrorStore;