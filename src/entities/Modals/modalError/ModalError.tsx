import { observer } from 'mobx-react';
import cl from './ModalError.module.scss';

//store
import {ModalErrorStore} from '../../../app/store/injectStores';
import { FC, PropsWithChildren } from 'react';

const ModalError: FC<PropsWithChildren> = ({children}) => {
    return(
        <div className={cl.spaceBehindModal} onClick={()=> ModalErrorStore.OffModalError()}>

            <div className={cl.modalError}>
                <div className={cl.error}>Error: </div>
                {children}
            </div>

        </div>
    )
}

export default ModalError;