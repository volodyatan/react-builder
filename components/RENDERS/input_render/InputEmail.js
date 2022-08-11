// react/next
import React from 'react'
import { useState } from 'react'

// material ui
import { TextField } from '@mui/material'

const InputEmail = ( {input} ) => {
    const [required, ] = useState(!input.optional)
    const [label, ] = useState(input.label)
    const [labelText, ] = useState(input.label_text)
    const [placeholder, ] = useState(input.placeholder)

    const [email, setEmail] = useState('')
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [errorHelperText, setErrorHelperText] = useState('')

    const changeEmail = (newEmail) => {
        let val = newEmail.target.value
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val) || val === ''){
            setInvalidEmail(false)
            setErrorHelperText('')
        }else{
            setInvalidEmail(true)
            setErrorHelperText('Please enter valid email')
        }
        setEmail(val)
    }

  return (
    <TextField
        error={invalidEmail}
        helperText={errorHelperText}
        required={required}
        id={label}
        label={labelText}
        placeholder={placeholder}
        value={email}
        onChange={changeEmail}
    />
  )
}

export default InputEmail