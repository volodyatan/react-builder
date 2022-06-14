import { Button, MenuItem, Box, Typography, TextField, CircularProgress, Card, CardContent } from '@mui/material';
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import { useTemplateContext, useTemplateGetAllContext } from '../../CONTEXT/TemplateProvider';

const ReactJson = dynamic(import('react-json-view'), { ssr: false });

const boxStyle = {
    borderRadius: '25px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '500px',
    // width: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    '& .MuiTextField-root': { m: 1, width: '30ch' },
    textAlign: 'center'
  }

const LoadTemplateModal = ( {close} ) => {
    const [isLoading, setIsLoading] = useState(true)

    const [allTemplates, setAllTemplates] = useState([])
    const [selectedTemplate, setSelectedTemplate] = useState('')
    const [selectedTemplateData, setSelectedTemplateData] = useState(<></>)

    const template = useTemplateContext()
    const getAllTemplates = useTemplateGetAllContext()

    useEffect(() => {
        const fetchTemplates = async () => {
            const templates = await getAllTemplates()
            setAllTemplates(templates)
        }
        setIsLoading(true)
        fetchTemplates().catch(console.error)
    }, []);

    useEffect(() => {
        console.log('all temps ', allTemplates)
        if (allTemplates !== {}){
            setIsLoading(false)
        }
    }, [allTemplates]);

    useEffect(() => {
        console.log('selected temp ', selectedTemplate)
        if (selectedTemplate !== '') {
            // find template with selected id
            let temp = allTemplates.filter((template)=> {
                return template['_id'] == selectedTemplate
            })
            // set to template item data
            setSelectedTemplateData(
                <Card sx={{ minWidth:'100px', maxHeight:'400px', overflowY:'scroll'}}>
                    <CardContent>
                        <ReactJson theme='monokai' collapsed={4} displayDataTypes={false} collapseStringsAfterLength={10} src={temp[0].data}/>
                    </CardContent>
                </Card>
            )
            console.log('templ ', temp)
        }

    }, [selectedTemplate]);

  return (
    <Box sx={boxStyle}
        component='form'
        autoComplete='off'
        onSubmit={(e) => {
            e.preventDefault()
            // addTransition({
            //     transitionName,
            //     nodeFrom,
            //     nodeTo
            // })
            console.log(' eeeee ', selectedTemplate)
            close()
        }}
        >
            <Typography>
            Select template
            </Typography>
            {!isLoading &&
                <div>                    
                    <TextField select id='selectedTemplate' label='Template ID' value={selectedTemplate} helperText='Select template' required={true} onChange={(e) => setSelectedTemplate(e.target.value)}>
                        {allTemplates.map((options) => (
                            <MenuItem key={options._id} value={options._id}>
                                {options._id}
                            </MenuItem>
                        ))}
                    </TextField>
                    {selectedTemplateData}
                    <br/>
                    <Button variant='outlined' type='submit'>
                            Select Template
                    </Button>
                </div>
            }

            {isLoading &&
                <CircularProgress />
            }

    </Box>
  )
}

export default LoadTemplateModal