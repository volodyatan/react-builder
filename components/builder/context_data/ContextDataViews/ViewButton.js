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
        <ContextBody type='button' context={buttonContext} />

    </Box>
  )
}

export default ViewButton
