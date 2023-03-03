import { memo } from 'react';
import folder from '../../../assets/folder.svg';
import cl from './FolderSvg.module.scss';

interface FolderSvg{
    width?: string,
    height?: string,
}

const FolderSVG = memo((props: any) => {
    const { width, height }: FolderSvg = props;
    return(
        <div className={cl.FolderSvgItem} {...props}>
            <img style={{width: width || '1.5rem', height: height || '1.5rem'}} title="Избранное" src={folder}/>
        </div>
    )
})

export default FolderSVG;