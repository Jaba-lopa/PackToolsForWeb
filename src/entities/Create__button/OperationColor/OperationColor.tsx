import { memo, useEffect, useState } from 'react';
import { InterimStyleStorage } from '../../../app/store/injectStores';
import { Operation } from '../OperationInterface';
import cl from './OperationColor.module.scss';

const OperationColor = memo(({title, style, type, valueStyle}: Operation) => {
    const startValue = valueStyle;

    const [value, setValue] = useState(startValue)

    useEffect(() => {
        InterimStyleStorage.editInterimButton(style, value, type);
    }, [value])

    return(
        <label className={cl.labelColor} htmlFor="">{title}
            <input className={cl.colorItem} value={startValue} type="color" onChange={(e) => {
                setValue(e.target.value)
            }}/>
        </label>
    )
})

export default OperationColor;