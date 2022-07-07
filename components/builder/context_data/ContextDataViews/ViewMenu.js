// react
import { useEffect, useState } from 'react'

// material ui
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

// icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// context
import { useTemplateGetContextContext } from '../../../CONTEXT/TemplateProvider';

// custom components
import RenderAccordion from './RenderAccordion';

// TODO: work on this component
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
      <Typography variant='button'>Headers</Typography>
      <RenderAccordion type='menu' contextData={menuContext} />
  </Box>
)
}

export default ViewMenu
