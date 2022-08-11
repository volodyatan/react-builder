// react/nextjs
import React, { useState, useEffect } from 'react'

// material ui
import { Button, Box, Typography, TextField, IconButton, MenuItem } from '@mui/material';

// icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// context
// import { useElementsAddNodeContext } from '../../../../CONTEXT/ElementsProvider';

const AddImageModal = ( {close, addContext} ) => {
    const [altText, setAltText] = useState('')
    const [src, setSrc] = useState('')

    // const addNode = useElementsAddNodeContext()

  return (
    <Box
      component='form' 
      autoComplete='off'
      onSubmit={(e) => {
        e.preventDefault()
        addContext('image',{
          alt_text: altText,
          src: src
        })
        close()
      }}>
        <IconButton onClick={()=> close()} sx={{position:'absolute', right:'2px', top:'2px'}}>
          <CloseRoundedIcon />
        </IconButton>
        <Typography>
          Add new button
        </Typography>

          <TextField id='altText' label='Alt Text' value={altText} required={true} onChange={(e) => setAltText(e.target.value)}/>
          <TextField id='src' label='Source URL' value={src} required={true} onChange={(e) => setSrc(e.target.value)}/>

          <Button type='submit'>Add</Button>

    </Box>
  )
}

export default AddImageModal