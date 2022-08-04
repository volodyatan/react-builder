// react/nextjs
import React, {useState, useEffect} from 'react'

// material ui
import { Modal, Box } from '@mui/material';

// custom components
import AddNodeModal from './AddNodeModal';
import AddTransitionModal from './AddTransitionModal';

const ContextModalBase = ( {modalMode, modalOpen, setModalOpen} ) => {

    const [modalContent, setModalContent] = useState(<></>)

    useEffect(() => {
        if (modalMode == 'text'){
            setModalContent(<AddNodeModal close={handleModalClose} />)
        }else if (modalMode == 'transition'){
            // setModalContent(<AddTransitionModal close={handleModalClose}/>)
        }
    },[]);

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