// react/next
import React from 'react'
import { useState } from 'react'

// material ui
import { TextField } from '@mui/material'

const InputPhoneNumber = ( {input} ) => {
    const [required, ] = useState(!input.optional)
    const [label, ] = useState(input.label)
    const [labelText, ] = useState(input.label_text)
    const [placeholder, ] = useState(input.placeholder)
    const [pattern, ] = useState(input.pattern)

  return (
    <TextField
        inputProps={{ inputMode: 'numeric', pattern: pattern }}
        required={required}
        id={label}
        label={labelText}
        placeholder={placeholder}
    />
  )
}

export default InputPhoneNumber