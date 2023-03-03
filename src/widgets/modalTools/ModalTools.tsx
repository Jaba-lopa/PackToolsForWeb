import Modal from "../../entities/Modals/modal/Modal";

export interface Tool {
    title: string,
    link: string
}

interface Tools extends Array<Tool>{};

const tools: Tools = [
    {title: 'Tool Colors', link: 'toolColors'},
    {title: 'Create Button', link: 'createButton'}
]

const ModalTools = () => {
    return(
        <Modal name='toolsModal' title='Tools' items={tools}></Modal>
    )
}

export default ModalTools;