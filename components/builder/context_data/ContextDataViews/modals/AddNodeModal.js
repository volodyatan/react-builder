import { Button, Box, Typography, TextField, IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react'

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import { useElementsAddNodeContext } from '../../../../CONTEXT/ElementsProvider';

const AddNodeModal = ( {close} ) => {
    const [nodeName, setNodeName] = useState('')

    // const addNode = useElementsAddNodeContext()

  return (
    <Box
      component='form' 
      autoComplete='off'
      onSubmit={(e) => {
        e.preventDefault()
        // addNode(nodeName)
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