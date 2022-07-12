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
const ViewImage = ( ) => {
  const getContext = useTemplateGetContextContext()
  const [imageContext, setImageContext] = useState()

  useEffect(() => {
    setImageContext(getContext('image'))
  }, []);

  return (
    <Box sx={{
        width: 'auto'
      }}>
        <Typography variant='button'>Images</Typography>
        <RenderAccordion type='image' contextData={imageContext} />
    </Box>
  )
}

export default ViewImage
