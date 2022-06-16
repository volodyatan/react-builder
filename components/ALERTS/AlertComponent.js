import React from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import { useState, useEffect } from 'react'


// alert types: 'error', 'warning', 'info', 'success'
const AlertComponent = ( {type, message} ) => {
    const [alertTitle, setAlertTitle] = useState()

    useEffect(() => {
        if (type == 'error'){
            setAlertTitle('Error')
        }
    }, []);

    return (
        <Alert severity={type}>
            <AlertTitle>{alertTitle}</AlertTitle>
            {message}
        </Alert>
    )
}

export default AlertComponent