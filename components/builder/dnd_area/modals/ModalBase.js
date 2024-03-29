// react/nextjs
import React, {useState, useEffect} from 'react'

// material ui
import { Button, ButtonGroup, Modal, Box, Typography } from '@mui/material';

// custom  components
import AddNodeModal from './AddNodeModal';
import AddTransitionModal from './AddTransitionModal';
import ViewContextModal from './ViewContextModal';

const ModalBase = ( {modalMode, setModalMode} ) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState(<></>)

    useEffect(() => {
        if (modalMode == 'node'){
            setModalContent(<AddNodeModal close={handleModalClose}/>)
        }else if (modalMode == 'transition'){
            setModalContent(<AddTransitionModal close={handleModalClose}/>)
        }else if (modalMode == 'context'){
            setModalContent(<ViewContextModal close={handleModalClose}/>)
        }
        setModalOpen(true)
    },[]);

    const handleModalClose = () => {
        setModalContent(<></>)
        setModalOpen(false)
        setModalMode(false)
    }

    return (
        <Modal open={modalOpen} onClose={handleModalClose}>
            <div>
            {modalContent}
            </div>
        </Modal>
    )
}

export default ModalBase