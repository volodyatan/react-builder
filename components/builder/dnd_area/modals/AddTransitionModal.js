import { Button, MenuItem, Box, Typography, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react'

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

const AddTransitionModal = ( {elements} ) => {
    const [transitionName, setTransitionName] = useState('')
    const [nodeFrom, setNodeFrom] = useState('')
    const [nodeTo, setNodeTo] = useState('')

    const [allNodes, setAllNodes] = useState([])

    useEffect(() => {
        // TODO: use reduce to only get NODES and not edges 
        let nodesNames = elements.map((ele) => {
            return ele.data
        })
        console.log('nodes namnames ', nodesNames)
        setAllNodes(nodesNames)
    }, []);


  return (
    <Box sx={boxStyle}
        component='form'
        autoComplete='off'>
            <Typography>
            Enter transition info
            </Typography>
            <div>
                <TextField id='transitionName' label='Transition name' value={transitionName} onChange={(e) => setTransitionName(e.target.value)}/>
                
                <TextField select id='fromNode' label='From' value={nodeFrom} helperText='Select transition origin' onChange={(e) => setNodeFrom(e.target.value)}>
                    {allNodes.map((options) => (
                        <MenuItem key={options.id} value={options.id}>
                            {options.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField select id='toNode' label='To' value={nodeTo} helperText='Select transition target' onChange={(e) => setNodeTo(e.target.value)}>
                    {allNodes.map((options) => (
                        <MenuItem key={options.id} value={options.id}>
                            {options.label}
                        </MenuItem>
                    ))}
                </TextField>

            </div>

    </Box>
  )
}

export default AddTransitionModal