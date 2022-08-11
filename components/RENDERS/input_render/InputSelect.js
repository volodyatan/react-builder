// react/next
import React from 'react'
import { useState } from 'react'

// material ui
import { TextField, Select, MenuItem, InputLabel } from '@mui/material'

const InputSelect = ( {input} ) => {
    const [required, ] = useState(!input.optional)
    const [label, ] = useState(input.label)
    const [labelText, ] = useState(input.label_text)
    const [placeholder, ] = useState(input.placeholder)
    const [options, ] = useState(input.data.options)

    const [selected, setSelected] = useState('')

  return (
    <div>
        <InputLabel id={`${label}-label-id`}>{labelText}</InputLabel>
        <Select
            sx={{
            }}
            required={required}
            labelId={labelText}
            id={label}
            value={selected}
            onChange={(newVal) => setSelected(newVal.target.value)}
        >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {options.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
        </Select>  
    </div>
    
  )
}

export default InputSelect