import React, {useState, useEffect} from 'react'
import { Button, ButtonGroup, Modal, Box, Typography } from '@mui/material';

import LoadTemplateModal from './LoadTemplateModal';
import SaveTemplateModal from './SaveTemplateModal';

const TemplateModal = ( {modalMode, setModalMode} ) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState(<></>)

    useEffect(() => {
        if (modalMode == 'load'){
            setModalContent(<LoadTemplateModal close={handleModalClose}/>)
        }else if (modalMode == 'save'){
            setModalContent(<SaveTemplateModal close={handleModalClose}/>)
        }
        setModalOpen(true)
    },[]);

    const handleModalClose = () => {
        setModalContent(<></>)
        setModalOpen(false)
        setModalMode(false)
    }

    return (
        <Modal  open={modalOpen} onClose={handleModalClose}>
            <div>
            {modalContent}
            </div>
        </Modal>
    )
}

export default TemplateModal