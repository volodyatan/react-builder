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
const ViewInput = ( ) => {

  const getContext = useTemplateGetContextContext()
  const [inputContext, setInputContext] = useState()

  useEffect(() => {
    setInputContext(getContext('input'))
  }, []);

  return (
    <Box sx={{
        width: 'auto'
      }}>
        <Typography variant='button'>Inputs</Typography>
        <RenderAccordion type='input' contextData={inputContext} />
    </Box>
  )
}

export default ViewInput
