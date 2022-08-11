// react
import { useEffect, useState } from 'react'

// material ui
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

// icons

// context
import { useTemplateGetContextContext } from '../../../CONTEXT/TemplateProvider';

// custom components
import ContextBody from './ContextBody';

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
        <ContextBody type='image' context={imageContext} />

    </Box>
  )
}

export default ViewImage
