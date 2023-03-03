import { FC, PropsWithChildren } from 'react';

import cl from './ModalConfirm.module.scss';

import { ModalConfirmStore } from '../../../app/store/injectStores';

const ModalConfirm: FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <div className={cl.spaceBehindModal} onClick={()=> ModalConfirmStore.OffModalConfirm()}>

                <div className={cl.modalConfirm} onClick={(e) => e.stopPropagation()}>
                    <div className={cl.confirm}>Внимание:</div>

                    <div>
                        Вы действительно хотите <span className={cl.confirmContent}>{children}</span> ?
                    </div>

                    <div className={cl.confirmAnswer}>
                        <button className={cl.confirmYes} onClick={() => ModalConfirmStore.setAnswer(true)}>Да</button>
                        <button className={cl.confirmNo} onClick={() => ModalConfirmStore.setAnswer(false)}>Нет</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ModalConfirm;