// react/nextjs
import React, { useState, useEffect } from 'react'

// material ui
import { Button, Box, Typography, TextField, IconButton, MenuItem } from '@mui/material';

// icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// context
// import { useElementsAddNodeContext } from '../../../../CONTEXT/ElementsProvider';

const AddButtonModal = ( {close, addContext} ) => {
    const [text, setText] = useState('')
    const [variant, setVariant] = useState('')
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const [actionId, setActionId] = useState('')

    const variants = [
      {variantName: 'contained'},{variantName: 'outlined'},{variantName: 'text'}
    ]
    const colors = [
      {colorName: 'inherit'},{colorName: 'primary'},{colorName: 'secondary'},{colorName: 'success'},{colorName: 'error'},{colorName: 'info'},{colorName: 'warning'}
    ]
    const sizes = [
      {size: 'small'},{size: 'medium'},{size: 'large'}
    ]

    // const addNode = useElementsAddNodeContext()

  return (
    <Box
      component='form' 
      autoComplete='off'
      onSubmit={(e) => {
        e.preventDefault()
        addContext('button',{
          text: text,
          actionID: actionId,
          variant: variant,
          color: color,
          size: size
        })
        close()
      }}>
        <IconButton onClick={()=> close()} sx={{position:'absolute', right:'2px', top:'2px'}}>
          <CloseRoundedIcon />
        </IconButton>
        <Typography>
          Add new button
        </Typography>

          <TextField id='newtext' label='Text' value={text} required={true} onChange={(e) => setText(e.target.value)}/>
          <TextField id='actionid' label='Action ID' value={actionId} required={true} onChange={(e) => setActionId(e.target.value)}/>

          <TextField select id='variant' label='Variant' value={variant} helperText='Select variant' required={true} onChange={(e) => setVariant(e.target.value)}>
              {variants.map((vrnt) => (
                  <MenuItem key={vrnt.variantName} value={vrnt.variantName}>
                      {vrnt.variantName}
                  </MenuItem>
              ))}
          </TextField>
          <TextField select id='color' label='Color' value={color} helperText='Select color' required={true} onChange={(e) => setColor(e.target.value)}>
              {colors.map((clr) => (
                  <MenuItem key={clr.colorName} value={clr.colorName}>
                      {clr.colorName}
                  </MenuItem>
              ))}
          </TextField>
          <TextField select id='size' label='Size' value={size} helperText='Select size' required={true} onChange={(e) => setSize(e.target.value)}>
              {sizes.map((s) => (
                  <MenuItem key={s.size} value={s.size}>
                      {s.size}
                  </MenuItem>
              ))}
          </TextField>

          <Button type='submit'>Add</Button>

    </Box>
  )
}

export default AddButtonModal