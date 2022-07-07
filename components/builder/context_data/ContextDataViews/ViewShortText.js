// react
import { useEffect, useState } from 'react'

// material ui
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { Box } from '@mui/system';

// icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// custom components
import { useTemplateGetContextContext } from '../../../CONTEXT/TemplateProvider';

// TODO: work on this component
const ViewShortText = ( ) => {

    const [accordion, setAccordion] = useState(<></>)
    const [activeAccordion, setActiveAccordion] = useState()
    const getContext = useTemplateGetContextContext()

    useEffect(() => {
      let textContext = getContext('text')

      let accordionBuilder = []
      for (let ctx in textContext) {
        console.log("txt", ctx)
        console.log('textcontx ', textContext[ctx])
        let text = textContext[ctx]
        let summaryId = `${ctx}-header`
        let ariaControls = `${ctx}-content`

        accordionBuilder.push(
          <Accordion expanded={activeAccordion === ctx} onChange={() => {setActiveAccordion(ctx)}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={ariaControls}
              id={summaryId}
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Text - {ctx}
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {text}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      }
      setAccordion(accordionBuilder)

      // console.log('cntxs ', ctx)
    }, []);

    useEffect(() => {
      console.log('rerendering...')
      
    }, [activeAccordion]);
    

  return (
    <Box sx={{
        width: 'auto'
      }}>
        <p>short text</p>
        {accordion}
    </Box>
  )
}

export default ViewShortText
