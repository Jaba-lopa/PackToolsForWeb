import reset from '../../../assets/reset.svg';

import cl from './ResetSvg.module.scss';

const ResetSVG = (props: any) => {
    return(
        <div {...props} className={cl.ResetSvgItem}>
            <img src={reset} title='Обновить'/>
        </div>
    )
}

export default ResetSVG;