import React, {useState, useEffect} from 'react'
import { Modal } from '@mui/material';

import AddNodeModal from './AddNodeModal';
import AddTransitionModal from './AddTransitionModal';

const ModalBase = ( {modalMode, setModalMode} ) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState(<></>)

    useEffect(() => {
        if (modalMode == 'node'){
            setModalContent(<AddNodeModal close={handleModalClose}/>)
        }else if (modalMode == 'transition'){
            setModalContent(<AddTransitionModal close={handleModalClose}/>)
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