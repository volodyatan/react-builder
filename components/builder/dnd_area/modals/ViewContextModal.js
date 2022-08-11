// react/nextjs
import React, { useState, useEffect } from 'react'

// material ui
import { Button, Box, Typography, TextField, IconButton } from '@mui/material';

// material icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// context

// custom components
import ViewContext from './ViewContext';

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

const ViewContextModal = ( {close, source} ) => {

  const [renderView, setRenderView] = useState(<ViewContext state={source} />)

  const changeView = () => {
    
  }

  useEffect(() => {
    
  }, []);

  return (
    <Box sx={boxStyle} 
      component='form' 
      autoComplete='off'
      onSubmit={(e) => {
        e.preventDefault()
        
        close()
      }}>
        <IconButton onClick={()=> close()} sx={{position:'absolute', right:'2px', top:'2px'}}>
          <CloseRoundedIcon />
        </IconButton>
        <Typography><b>"{source}"</b> state context</Typography>
        
        {renderView}

        {/* <Button type='submit'>Add Node</Button> */}

    </Box>
  )
}

export default ViewContextModal