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
          <ContextBody type='list' context={listContext} />
    </Box>
  )
}

export default ViewList
