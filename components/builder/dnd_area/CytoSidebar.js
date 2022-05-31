import { Button, ButtonGroup, Modal, Box, Typography } from '@mui/material';
import { useState } from 'react';

import AddNodeModal from './modals/AddNodeModal';
import AddTransitionModal from './modals/AddTransitionModal';

const DraggableNodes = ( {elements} ) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(<></>)

  const handleOpenAddNode = () => {
    setModalContent(<AddNodeModal />)
    setModalOpen(true)
  }

  const handleOpenAddTransition = () => {
    setModalContent(<AddTransitionModal elements={elements}/>)
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalContent(<></>)
    setModalOpen(false)
  }

  return (
    <div>
      <ButtonGroup orientation='vertical'>
        <Button onClick={handleOpenAddNode}>Add Node</Button>
        <Button onClick={handleOpenAddTransition}>Add Transition</Button>
        <Button>Delete Node</Button>
        <Button>Third Button</Button>
      </ButtonGroup>
      <Modal open={modalOpen} onClose={handleModalClose}>
        <div>
          {modalContent}
        </div>
      </Modal>
    </div>
  )
}

export default DraggableNodes