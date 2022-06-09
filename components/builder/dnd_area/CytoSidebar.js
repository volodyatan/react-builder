import { Button, ButtonGroup, Modal, Box, Typography } from '@mui/material';
import { useState } from 'react';

import ModalBase from './modals/ModalBase';

const DraggableNodes = ( ) => {
  const [modalMode, setModalMode] = useState(false)
  const [modalRender, setModalRender] = useState(<></>)

  useEffect(() => {
    if (modalMode !== false){
        setModalRender(<ModalBase modalMode={modalMode} setModalMode={setModalMode}/>)
    }else{
      setModalRender(<></>)
    }
  }, [modalMode]);

  return (
    <div>
      <ButtonGroup orientation='vertical'>
        <Button onClick={()=> setModalMode('node')}>Add Node</Button>
        <Button onClick={()=> setModalMode('transition')}>Add Transition</Button>
        <Button>Delete Node</Button>
        <Button>Third Button</Button>
      </ButtonGroup>
      {modalRender}
    </div>
  )
}

export default DraggableNodes