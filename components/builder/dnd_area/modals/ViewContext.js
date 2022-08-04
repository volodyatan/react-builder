// react/nextjs
import React, { useState, useEffect } from 'react'

// material ui
import { Button, Box, Typography, TextField, IconButton, Grid, Divider } from '@mui/material';

// material icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// context
import { useTemplateGetStateContext } from '../../../CONTEXT/TemplateProvider';

const ViewContext = ( { state } ) => {

    const [currentContext, setCurrentContext] = useState(null)
    const [contextDisplay, setContextDisplay] = useState(<></>)

    const getContext = useTemplateGetStateContext()

    useEffect(() => {
        setCurrentContext(getContext(state))
        console.log('currentcontext ', currentContext)
    }, []);

    useEffect(() => {
        if (currentContext !== null){
            let displays = currentContext.map(data =>{
                let ctx_type = ''
                let ctx_num = ''
                for (let d in data){
                    ctx_type = d
                    ctx_num = data[d]
                }
                return  <Grid container>
                            <Grid item xs>
                                {ctx_type}
                            </Grid>

                            <Divider orientation="vertical" flexItem />

                            <Grid item xs>
                                {ctx_num}
                            </Grid>

                            <Divider orientation="vertical" flexItem />

                            <Grid item xs>
                                {JSON.stringify(data)}
                            </Grid>
                        </Grid>
            })

            setContextDisplay(<Box>{displays}</Box>)
        }
    }, [currentContext]);

    return (
        <Box><br/>
            {contextDisplay}
        </Box>
    )
}

export default ViewContext