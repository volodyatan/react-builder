// react/nextjs
import React, { useState, useEffect } from 'react'

// material ui
import { Button, Box, Typography, TextField, IconButton, MenuItem } from '@mui/material';

// icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// context
// import { useElementsAddNodeContext } from '../../../../CONTEXT/ElementsProvider';

const AddTextModal = ( {close, addContext} ) => {
    const [text, setText] = useState('')
    const [variant, setVariant] = useState('')

    const variants = [
      {variantName: 'body1'},{variantName: 'body2'},{variantName: 'button'},{variantName: 'caption'},{variantName: 'h1'},{variantName: 'h2'},{variantName: 'h3'},{variantName: 'h4'},{variantName: 'h5'},{variantName: 'h6'},{variantName: 'subtitle1'},{variantName: 'subtitle2'}
    ]

    // const addNode = useElementsAddNodeContext()

  return (
    <Box
      component='form' 
      autoComplete='off'
      onSubmit={(e) => {
        e.preventDefault()
        addContext('text',{
          text: text,
          variant: variant
        })
        close()
      }}>
        <IconButton onClick={()=> close()} sx={{position:'absolute', right:'2px', top:'2px'}}>
          <CloseRoundedIcon />
        </IconButton>
        <Typography>
          Add new text
        </Typography>

          <TextField id='newtext' label='Text' value={text} required={true} onChange={(e) => setText(e.target.value)}/>
          <TextField select id='variant' label='Variant' value={variant} helperText='Select variant' required={true} onChange={(e) => setVariant(e.target.value)}>
              {variants.map((vrnt) => (
                  <MenuItem key={vrnt.variantName} value={vrnt.variantName}>
                      {vrnt.variantName}
                  </MenuItem>
              ))}
          </TextField>

          <Button type='submit'>Add</Button>

    </Box>
  )
}

export default AddTextModal