// react
import { useEffect, useState } from 'react'

// material ui
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography, Divider, Chip } from '@mui/material';
import { Box } from '@mui/system';

// icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// custom components
import TextRender from '../../../RENDERS/TextRender';
import MenuRender from '../../../RENDERS/MenuRender';

const RenderAccordion = ( { type, contextData } ) => {

    const [accordion, setAccordion] = useState(<></>)
    const [activeAccordion, setActiveAccordion] = useState()

    // TODO: might need to fix this to not re-render the entire thing after every accordion click
    useEffect(() => {
      let accordionBuilder = []
      for (let ctx in contextData) {
        let field = contextData[ctx]
        let summaryId = `${ctx}-header`
        let ariaControls = `${ctx}-content`

        let name = ''
        let content = <></>
        if (type === 'text'){
            name = field.text
            content =   Object.keys(field).map( (key) => {
                            return  <Box key={JSON.stringify(field[key])+name+summaryId}>
                                        <Divider>
                                            <Chip label={key.toUpperCase()}/>
                                        </Divider>
                                        <TextRender text={field[key]} variant={field.variant} />
                                    </Box>
                        })
        }else if (type === 'menu'){
            name = field.name
            content =   Object.keys(field).map( (key) => {
                            return  <Box key={JSON.stringify(field[key])+name+summaryId}>
                                        <Divider>
                                            <Chip label={key.toUpperCase()}/>
                                        </Divider>
                                        {key !== 'menu_items' &&
                                            <TextRender text={field[key]} variant='body1' />
                                        }
                                        {key === 'menu_items' && 
                                            <MenuRender menuItems={JSON.stringify(field[key])} />
                                        }
                                    </Box>
                        })
        }

        accordionBuilder.push(
          <Accordion key={JSON.stringify(field)+summaryId} expanded={activeAccordion === ctx} onChange={() => {
              if (activeAccordion === ctx){
                setActiveAccordion(null)
              }else{
                setActiveAccordion(ctx)
              }
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={ariaControls}
              id={summaryId}
            >
              <Typography sx={{ width: '33%', flexShrink: 0, minWidth:'100px'}} variant='button'>
                {type} - {ctx}
              </Typography>
              <Typography sx={{ color: 'text.secondary', maxWidth:'350px' }} noWrap={true}>{name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {content}
            </AccordionDetails>
          </Accordion>
        )
      }
      setAccordion(accordionBuilder)
    }, [contextData, activeAccordion]);


    return (
        <Box>
            {accordion}
        </Box>
    )
}

export default RenderAccordion