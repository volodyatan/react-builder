// react/next
import React from 'react'
import { useState } from 'react'

// material ui
import { TextField } from '@mui/material'

const InputText = ( {input} ) => {
    const [required, ] = useState(!input.optional)
    const [label, ] = useState(input.label)
    const [labelText, ] = useState(input.label_text)
    const [placeholder, ] = useState(input.placeholder)

  return (
    <TextField
        required={required}
        id={label}
        label={labelText}
        placeholder={placeholder}
    />
  )
}

export default InputText