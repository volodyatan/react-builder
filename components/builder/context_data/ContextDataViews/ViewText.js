// react
import { useEffect, useState } from 'react'

// material ui
import { Box } from '@mui/system';

// context
import { useTemplateGetContextContext } from '../../../CONTEXT/TemplateProvider';

// custom componenets
import ContextBody from './ContextBody';

// TODO: work on this component
const ViewText = ( ) => {
  
    const getContext = useTemplateGetContextContext()
    const [textContext, setTextContext] = useState()

    useEffect(() => {
      setTextContext(getContext('text'))
    }, []);

  return (
    <Box>
        <ContextBody type='text' context={textContext} />
    </Box>
  )
}

export default ViewText
