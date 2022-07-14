// react
import React from 'react'

// material ui
import { Divider, ListItemIcon, ListItemText, ListSubheader, MenuList, MenuItem } from '@mui/material';
import { Box } from '@mui/system';

// custom componenets

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
        <Typography variant='button'>Inputs</Typography>
        <RenderAccordion type='input' contextData={inputContext} />
    </Box>
  )
}

export default ViewInput
