import { observer } from 'mobx-react';
import { useState } from 'react';
import { ButtonStore } from '../../../app/store/injectStores';
import cl from './ButtonTemplate.module.scss';

const ButtonTemplate = () => {
    const [active, setActive] = useState(false);
    const text = `${ButtonStore.button.text}`
    const style = {...ButtonStore.getStyles()};

    const stylesHover = {...ButtonStore.getStylesHover()};

    const styleHover = {...style, ...stylesHover};

    return(
        <div className={cl.buttonTemplate}>

            <button style={active ? styleHover : style}
            onMouseMove={() => {

                setActive(true)

            }} onMouseLeave={() => {

                setActive(false)

            }}>{text}</button>

        </div>
    )
}

export default observer(ButtonTemplate);