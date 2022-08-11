// react/nextjs
import React, { useState, useEffect } from 'react'

// material ui
import { Button, Box, Typography, TextField, IconButton, MenuItem } from '@mui/material';

// icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// context
// import { useElementsAddNodeContext } from '../../../../CONTEXT/ElementsProvider';

const AddListModal = ( {close, addContext} ) => {
    const [text, setText] = useState('')
    const [type, setType] = useState('')
    const [objName, setObjName] = useState('')

  return (
    <Box
      component='form' 
      autoComplete='off'
      onSubmit={(e) => {
        e.preventDefault()
        addContext('list',{
          name: text,
          type: type,
          object_name: objName
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
          <TextField id='type' label='Type' value={type} required={true} onChange={(e) => setType(e.target.value)}/>
          <TextField id='objName' label='Object name' value={objName} required={true} onChange={(e) => setObjName(e.target.value)}/>

          <Button type='submit'>Add</Button>

    </Box>
  )
}

export default AddListModal