// react/nextjs
import React, { useState, useEffect } from 'react'

// material ui
import { Button, MenuItem, Box, Typography, TextField, IconButton } from '@mui/material';

// material icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// context
import { useElementsAddNodeContext, useElementsAddTransitionContext, useCyContext } from '../../CONTEXT/ElementsProvider';

const boxStyle = {
    borderRadius: '25px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    '& .MuiTextField-root': { m: 1, width: '30ch' },
    textAlign: 'center'
  }

const SaveTemplateModal = ( {close, source = false} ) => {
    const [transitionName, setTransitionName] = useState('')
    const [nodeFrom, setNodeFrom] = useState('')
    const [nodeTo, setNodeTo] = useState('')
    const [sourceDisabled, setSourceDisabled] = useState(false)

    const [allNodes, setAllNodes] = useState([])

    const elements = useCyContext()
    const addTransition = useElementsAddTransitionContext()

    useEffect(() => {
        let nodesNames = elements.filter((ele) => {
            return 'position' in ele
        }).map((ele) => {
            return ele.data
        })
        console.log('nodes namnames ', nodesNames)
        setAllNodes(nodesNames)

        if (source !== false) {
            setSourceDisabled(true)
            setNodeFrom(source)
        } 
    }, []);


  return (
    <Box sx={boxStyle}
        component='form'
        autoComplete='off'
        onSubmit={(e) => {
            e.preventDefault()
            addTransition({
                transitionName,
                nodeFrom,
                nodeTo
            })
            close()
        }}
        >
            <IconButton onClick={()=> close()} sx={{position:'absolute', right:'2px', top:'2px'}}>
                    <CloseRoundedIcon />
            </IconButton>
            <Typography>
            Save template?
            </Typography>
            {/* TODO: add saving context to database */}

    </Box>
  )
}

export default SaveTemplateModal