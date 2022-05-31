import { Button, Box, Typography, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react'

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
    '& .MuiTextField-root': { m: 1, width: '25ch' },
    textAlign: 'center'
  }

const AddNodeModal = () => {
    const [nodeName, setNodeName] = useState('')

  return (
    <Box sx={boxStyle}
        component='form'
        autoComplete='off'>
            <Typography>
            Enter node info
            </Typography>
            <TextField id='newNodeName' label='Node name' value={nodeName} onChange={(e) => setNodeName(e.target.value)}/>
            

    </Box>
  )
}

export default AddNodeModal