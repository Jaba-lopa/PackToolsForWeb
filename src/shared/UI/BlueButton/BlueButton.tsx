import { memo } from 'react';
import cl from './BlueButton.module.scss';

const BlueButton = memo((props: any) => {
    return(
        <div {...props} className={cl.blueButton}>
            {props.children}
        </div>
    )
})

export default BlueButton;