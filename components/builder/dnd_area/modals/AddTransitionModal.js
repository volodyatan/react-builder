// react/nextjs
import React, { useState, useEffect } from 'react'

// material ui
import { Button, MenuItem, Box, Typography, TextField, IconButton } from '@mui/material';

// material icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// context
import { useElementsAddTransitionContext, useCyContext } from '../../../CONTEXT/ElementsProvider';

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

const AddTransitionModal = ( {close, source = false} ) => {
    const [transitionName, setTransitionName] = useState('')
    const [nodeFrom, setNodeFrom] = useState('')
    const [nodeTo, setNodeTo] = useState('')
    const [sourceDisabled, setSourceDisabled] = useState(false)

    const [allNodes, setAllNodes] = useState([])

    const cy = useCyContext()
    const addTransition = useElementsAddTransitionContext()

    useEffect(() => {
        let nodesNames = cy.elements().filter((ele) => {
            // if element does not have a source property in data, it is a node TODO: create nodes using cy.add, then use group property to check if element is a node
            return !('source' in ele.data())
        }).map((ele) => {
            return ele.data()
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
            Enter transition info
            </Typography>
            <div>
                <TextField id='transitionName' label='Transition name' value={transitionName} required={true} onChange={(e) => setTransitionName(e.target.value)}/>
                
                <TextField select id='fromNode' label='From' value={nodeFrom} disabled={sourceDisabled} helperText='Select transition origin' required={true} onChange={(e) => setNodeFrom(e.target.value)}>
                    {allNodes.map((options) => (
                        <MenuItem key={options.id} value={options.id}>
                            {options.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField select id='toNode' label='To' value={nodeTo} helperText='Select transition target' required={true} onChange={(e) => setNodeTo(e.target.value)}>
                    {allNodes.map((options) => (
                        <MenuItem key={options.id} value={options.id}>
                            {options.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Button type='submit'>
                        Add Transition
                </Button>

            </div>

    </Box>
  )
}

export default AddTransitionModal