import { memo, useEffect, useMemo, useState } from 'react';
import { ButtonStore, InterimStyleStorage } from '../../../app/store/injectStores';
import { Operation } from '../OperationInterface';
import cl from './OperationItem.module.scss';

const OperationItem = memo(({title, unit, style, type, valueStyle}: Operation) => {
    const startValue = valueStyle;
    
    const [value, setValue] = useState(startValue);

    useEffect(() => {
        InterimStyleStorage.editInterimButton(style, value, type);
    }, [value])

    return(
        <div className={cl.operationItem}>
            <label htmlFor="">{title}, {unit}
                <input value={startValue} onChange={(e) => {

                    setValue(e.target.value)

                }} className={cl.operationData} type="text" placeholder='...'/>
            </label>
            <input step={unit === 's' ? '0.1' : '1'} value={startValue} onChange={(e) => {

                setValue(e.target.value)

            }} className={cl.operationRange} type="range" max={unit === 's' ? 2 : 100} />
        </div>
    )
})

export default OperationItem;