import { Button, Box, Typography, TextField, IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react'

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useElementsAddNodeContext } from '../../../CONTEXT/ElementsProvider';

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

const AddNodeModal = ( {close} ) => {
    const [nodeName, setNodeName] = useState('')

    const addNode = useElementsAddNodeContext()

  return (
    <Box sx={boxStyle} 
      component='form' 
      autoComplete='off'
      onSubmit={(e) => {
        e.preventDefault()
        addNode(nodeName)
        close()
      }}>
        <IconButton onClick={()=> close()} sx={{position:'absolute', right:'2px', top:'2px'}}>
                    <CloseRoundedIcon />
            </IconButton>
        <Typography>
        Enter node info
        </Typography>
          <TextField id='newNodeName' label='Node name' value={nodeName} required={true} onChange={(e) => setNodeName(e.target.value)}/>
          <Button type='submit'>Add Node</Button>

    </Box>
  )
}

export default AddNodeModal