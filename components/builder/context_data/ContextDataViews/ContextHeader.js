// react/nextjs
import React from 'react'

// material ui
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

// icons
import AddIcon from '@mui/icons-material/Add';

// custom componenets

const ContextHeader = ( {type, openModal} ) => {
  return (
    <Box 
        sx={{
        display:'flex',
        justifyContent:'space-between'
        }}
    >
        <Typography variant='button'>{type}</Typography>
        <Button
            color='info'
            size='small'
            variant='contained'
            startIcon={<AddIcon/>}
            onClick={() => {
                openModal(type)
            }}
        >
        Add new {type}
        </Button>
    </Box>
  )
}

export default ContextHeader