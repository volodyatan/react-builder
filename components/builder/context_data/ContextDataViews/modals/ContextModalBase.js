// react/nextjs
import React, {useState, useEffect} from 'react'

// material ui
import { Modal, Box } from '@mui/material';

// custom components
import AddTextModal from './AddTextModal';
import AddButtonModal from './AddButtonModal';
import AddListModal from './AddListModal';
import AddImageModal from './AddImageModal';
import AddInputModal from './AddInputModal';
import AddMenuModal from './AddMenuModal';

// context
import { useTemplateAddContextData } from '../../../../CONTEXT/TemplateProvider';

const ContextModalBase = ( {modalMode, modalOpen, setModalOpen} ) => {

    const [modalContent, setModalContent] = useState(<></>)

    const addContextData = useTemplateAddContextData()

    const [update, setUpdate] = useState(false)

    useEffect(() => {
        if (modalMode == 'text'){
            setModalContent(<AddTextModal close={handleModalClose} addContext={addContext}/>)
        }else if (modalMode == 'button'){
            setModalContent(<AddButtonModal close={handleModalClose} addContext={addContext}/>)
        }else if (modalMode == 'list'){
            setModalContent(<AddListModal close={handleModalClose} addContext={addContext}/>)
        }else if (modalMode == 'image'){
            setModalContent(<AddImageModal close={handleModalClose} addContext={addContext}/>)
        }else if (modalMode == 'menu'){
            setModalContent(<AddMenuModal close={handleModalClose} addContext={addContext}/>)
        }else if (modalMode == 'input'){
            setModalContent(<AddInputModal close={handleModalClose} addContext={addContext}/>)
        }
    },[]);

    const addContext = (type,data) => {
        addContextData(type,data)
        setUpdate((prev)=> !prev)
    }

    const handleModalClose = () => {
        setModalOpen(false)
    }

    return (

        <Modal open={modalOpen} onClose={handleModalClose}>
            <Box sx={boxStyle} >
                {modalContent}
            </Box>
        </Modal>
    )
}

export default ContextModalBase



const boxStyle = {
    borderRadius: '25px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    '& .MuiTextField-root': { m: 2, width: '25ch' },
    textAlign: 'center'
  }