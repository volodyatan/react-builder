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
        <ContextBody type='input' context={inputContext} />

    </Box>
  )
}

export default ViewInput
