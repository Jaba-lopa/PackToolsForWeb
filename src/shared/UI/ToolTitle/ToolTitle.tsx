import cl from './ToolTitle.module.scss';

const ToolTitle = ({children}: any) => {
    return(
        <h1 className={cl.UI_title}>{children}</h1>
    )
}

export default ToolTitle;