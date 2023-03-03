import { observable } from "mobx";

const storeTools = observable({
    toolModal: false,
    setToolModal(){
        this.toolModal = !this.toolModal;
    },
})

export default storeTools;