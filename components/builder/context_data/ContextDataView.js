// react
import { useState } from 'react';

// material ui
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

// custom componenets
import ContextDataList from './ContextDataList';

// TODO: work on this component
const ContextDataView = () => {
  const [activeView, setActiveView] = useState(<></>)

  return (
    <Grid 
      direction='row' 
      // alignItems='stretch'
      justifyContent='flex-start'
      container 
      spacing={1}
      sx={{
        position: 'fixed',
        width:'100%',
        height: '100%',
        left: 0,
        right: 50,
        top: 110,
        bottom: 0
      }}>
      <Grid item xs={2}>

        <ContextDataList setActive={setActiveView}/>

      </Grid>
      <Grid item xs={10}>
        <Box sx={{}}>

          {activeView}

        </Box>

      </Grid>

    </Grid>
  )
}

export default ContextDataView