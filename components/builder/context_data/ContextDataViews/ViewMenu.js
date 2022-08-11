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

const ViewMenu = ( ) => {

  const getContext = useTemplateGetContextContext()
  const [menuContext, setMenuContext] = useState()

  useEffect(() => {
    setMenuContext(getContext('menu'))
  }, []);
  
return (
  <Box sx={{
      width: 'auto'
    }}>
      <ContextBody type='menu' context={menuContext} />

  </Box>
)
}

export default ViewMenu
