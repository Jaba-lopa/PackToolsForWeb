import { Link } from 'react-router-dom';
import cl from './Modal.module.scss';

import { Tool } from '../../../widgets/modalTools/ModalTools';

//store
import {storeTools} from '../../../app/store/injectStores'

const Modal = ({children, name, title, items}: any) => {
    return(

        <div onClick={() => {
            if (name === 'toolsModal') {
                storeTools.setToolModal();
            }
        }} className={cl.spaceBehindModal}>

            <div onClick={(e) => e.stopPropagation()} className={cl.modal}>

                <h2 className={cl.modalTile}>{title}</h2>

                <div className={cl.modalItems}>
                    {items.map((item: Tool, i:number) => 
                        <Link 
                            key={i}
                            to={item.link} 
                            className={cl.modalItem}
                            onClick={() => storeTools.setToolModal()}
                        >{item.title}</Link>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Modal;