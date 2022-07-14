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
      <Typography variant='button'>Menus</Typography>
      <RenderAccordion type='menu' contextData={menuContext} />
  </Box>
)
}

export default ViewMenu
