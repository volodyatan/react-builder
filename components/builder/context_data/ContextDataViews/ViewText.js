// react
import { useEffect, useState } from 'react'

// material ui
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

// icons

// context
import { useTemplateGetContextContext } from '../../../CONTEXT/TemplateProvider';

// custom componenets
import RenderAccordion from './RenderAccordion';

// TODO: work on this component
const ViewText = ( ) => {
  
    const getContext = useTemplateGetContextContext()
    const [textContext, setTextContext] = useState()

    useEffect(() => {
      setTextContext(getContext('text'))
    }, []);

  return (
    <Box>
        <Typography variant='button'>text</Typography>
        <RenderAccordion type='text' contextData={textContext} />
    </Box>
  )
}

export default ViewText
