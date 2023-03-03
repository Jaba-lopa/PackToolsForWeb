import { observable } from "mobx";

const ModalConfirmStore = observable({
    isModalConfirm: false,
    progress: 'off',
    confirm: '',
    OnModalConfirm(confirm: string, callback: any){
        this.isModalConfirm = true;
        this.progress = 'pending'
        this.confirm = confirm;
        this.callback = callback;
    },
    OffModalConfirm(){
        this.isModalConfirm = false;
        this.confirm = '';
    },
    setAnswer(answer: boolean){
        this.progress = 'off'
        if (answer) this.callback();
        this.OffModalConfirm()
        this.callback = () => {}
    },
    callback: () => {}
})

export default ModalConfirmStore;