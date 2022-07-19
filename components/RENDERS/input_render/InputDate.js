// react/next
import React from 'react'
import { useState } from 'react'

// material ui
import { TextField } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const InputDate = ( {input} ) => {
    const [required, ] = useState(!input.optional)
    const [label, ] = useState(input.label)
    const [labelText, ] = useState(input.label_text)
    const [placeholder, ] = useState(input.placeholder)

    const [date, setDate] = useState(new Date())

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
       <DesktopDatePicker
            required={required}
            label={labelText}
            inputFormat="MM/dd/yyyy"
            value={date}
            onChange={(newDate) => setDate(newDate)}
            renderInput={(params) => <TextField {...params} />}
        /> 
    </LocalizationProvider>
    
  )
}

export default InputDate