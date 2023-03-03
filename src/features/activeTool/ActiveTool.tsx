import { FC, PropsWithChildren } from 'react';
import cl from './ActiveTool.module.scss';

const ActiveTool: FC<PropsWithChildren> = ({children}) => {
    return(
        <div className={cl.activeTool}>
            {children}
        </div>
    )
}

export default ActiveTool;