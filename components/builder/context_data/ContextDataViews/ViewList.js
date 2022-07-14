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

const ViewList = ( ) => {

  const getContext = useTemplateGetContextContext()
  const [listContext, setListContext] = useState()

  useEffect(() => {
    setListContext(getContext('list'))
  }, []);

  return (
    <Box sx={{
        width: 'auto'
      }}>
        <Typography variant='button'>Lists</Typography>
        <RenderAccordion type='list' contextData={listContext} />
    </Box>
  )
}

export default ViewList
