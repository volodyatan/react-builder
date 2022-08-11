// react/nextjs
import React, { useState, useEffect } from 'react'

// material ui
import { Button, Box, Typography, TextField, IconButton, MenuItem } from '@mui/material';

// icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// context
// import { useElementsAddNodeContext } from '../../../../CONTEXT/ElementsProvider';

const AddInputModal = ( {close, addContext} ) => {
    const [type, setType] = useState('form')
    const [inputName, setInputName] = useState('')
    const [inputs, setInputs] = useState([
        {"type": '',
        "label": '',
        "label_text": '',
        "placeholder": '',
        "optional": true,
        "data": {}}
    ])

    // const addNode = useElementsAddNodeContext()

    const updateFormData = (idx, field, value) => {
        let data = [...inputs]
        data[idx][field] = value
        setInputs(data)
    }

  return (
    <Box
      component='form' 
      autoComplete='off'
      onSubmit={(e) => {
        e.preventDefault()
        addContext('input',{
          type: type,
          name: inputName,
          inputs: inputs
        })
        close()
      }}>
        <IconButton onClick={()=> close()} sx={{position:'absolute', right:'2px', top:'2px'}}>
          <CloseRoundedIcon />
        </IconButton>
        <Typography>
          Add new button
        </Typography>

        {/* TODO: add differnt input types */}
          <TextField id='type' label='Type' value={type} required={true} disabled={true} onChange={(e) => setType(e.target.value)}/>
          <TextField id='name' label='Name' value={inputName} required={true} onChange={(e) => setInputName(e.target.value)}/>

        {/* TODO: add form validation */}
        {inputs.map((inpt,idx) => {
            return  <Box key={`form-data-${idx}`}>
                        <hr/>
                        <TextField key={`${idx}-type`} id={`${idx}-type`} label='Type' value={inpt.type} required={true} size='small' onChange={(e) => updateFormData(idx,'type',e.target.value)}/>
                        <TextField key={`${idx}-label`} id={`${idx}-label`} label='Label' value={inpt.label} required={true} size='small' onChange={(e) => updateFormData(idx,'label',e.target.value)}/>
                        <TextField key={`${idx}-label-text`} id={`${idx}-label-text`} label='Label Text' value={inpt.label_text} required={true} size='small' onChange={(e) => updateFormData(idx,'label_text',e.target.value)}/>
                        <TextField key={`${idx}-placeholder`} id={`${idx}-placeholder`} label='Placeholder' value={inpt.placeholder} required={true} size='small' onChange={(e) => updateFormData(idx,'placeholder',e.target.value)}/>
                        {/* TODO: add extra data and optional fields */}
                    </Box>

        })}
        {/* TODO: fix overflow issue, adding new inputs makes inputs inaccessible, no scroll available */}
        <Button onClick={() => setInputs((prev)=> {
            let data = [...prev]
            data.push({"type": '',
            "label": '',
            "label_text": '',
            "placeholder": '',
            "optional": true,
            "data": {}})
            return data
        })}>Add input </Button>

          <Button type='submit'>Add</Button>

    </Box>
  )
}

export default AddInputModal