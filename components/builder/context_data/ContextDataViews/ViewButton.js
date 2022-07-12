// react
import { useEffect, useState } from 'react'

// material ui
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

// icons

// context
import { useTemplateGetContextContext } from '../../../CONTEXT/TemplateProvider';

// custom components
import RenderAccordion from './RenderAccordion';

// TODO: work on this component
const ViewButton = ( ) => {

  const getContext = useTemplateGetContextContext()
  const [buttonContext, setButtonContext] = useState()

  useEffect(() => {
    setButtonContext(getContext('button'))
  }, []);

  return (
    <Box sx={{
        width: 'auto'
      }}>
        <Typography variant='button'>Buttons</Typography>
        <RenderAccordion type='button' contextData={buttonContext} />
    </Box>
  )
}

export default ViewButton
