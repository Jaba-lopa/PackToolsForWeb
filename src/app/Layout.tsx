import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";
import ModalConfirm from "../entities/Modals/modalConfirm/ModalConfirm";
import ModalError from "../entities/Modals/modalError/ModalError";
import Footer from "../widgets/footer/Footer";
import Header from "../widgets/header/Header";
import cl from './Layout.module.scss';

//store
import {ModalErrorStore, ModalConfirmStore} from "./store/injectStores";

const Layout = () => {
    return(
        <div className={cl.app}>
            <Header/>

            {ModalErrorStore.isModalError
                ? <ModalError>{ModalErrorStore.error}</ModalError>
                : <div></div>
            }

            {ModalConfirmStore.isModalConfirm
                ? <ModalConfirm>{ModalConfirmStore.confirm}</ModalConfirm>
                : <div></div>
            }

            <div className={cl.container}>
                <Outlet />
            </div>

            <Footer/>
        </div>
    )
}

export default observer(Layout);