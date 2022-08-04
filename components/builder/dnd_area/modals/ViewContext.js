// react/nextjs
import React, { useState, useEffect } from 'react'

// material ui
import { Button, Box, Typography, TextField, IconButton, Grid, Divider } from '@mui/material';

// material icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// context
import { useTemplateGetStateContext, useTemplateGetContextData } from '../../../CONTEXT/TemplateProvider';

// custom components
import RenderItem from '../../../RENDERS/RenderItem';

const ViewContext = ( { state } ) => {

    const [currentContext, setCurrentContext] = useState(null)
    const [contextDisplay, setContextDisplay] = useState(<></>)

    const getContext = useTemplateGetStateContext()
    const getContextData = useTemplateGetContextData()

    useEffect(() => {
        setCurrentContext(getContext(state))
        console.log('currentcontext ', currentContext)
    }, []);

    useEffect(() => {
        if (currentContext === null){
            return
        }

        let displays = currentContext.map(data =>{
            let ctx_type = ''
            let ctx_num = ''
            for (let d in data){
                ctx_type = d
                ctx_num = data[d]
            }

            let ctx_data = getContextData(ctx_type, ctx_num)

            return  <Box sx={{ borderStyle:'solid', borderWidth:'thin', marginBottom:'15px', padding:'5px'}}>
                        <Grid container rowSpacing={0} columnSpacing={1}>
                            <Grid item xs={3}>
                                {ctx_type}
                            </Grid>

                            <Divider orientation="vertical" flexItem />

                            <Grid item xs={2}>
                                {ctx_num}
                            </Grid>

                            <Divider orientation="vertical" flexItem />

                            <Grid item xs={6}>
                                <RenderItem type={ctx_type} num={ctx_num} data={ctx_data} />
                            </Grid>
                        </Grid>
                    </Box>
        })

        setContextDisplay(<Box>{displays}</Box>)
    }, [currentContext]);

    return (
        <Box><br/>
            {contextDisplay}
            
            <Button variant='outlined' 
                onClick={() => {
                    
                }}
            > 
                Add display data to state
            </Button>
        </Box>
    )
}

export default ViewContext