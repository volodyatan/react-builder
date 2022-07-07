// react
import { useEffect, useState } from 'react'

// material ui
import { Accordion, AccordionDetails, AccordionSummary, Button, ButtonGroup, Card, CardActionArea, CardContent, Chip, Divider, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

// icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// context
import { useTemplateGetContextContext } from '../../../CONTEXT/TemplateProvider';

// TODO: work on this component
const ViewMenu = ( ) => {

  const [accordion, setAccordion] = useState(<></>)
  const [activeAccordion, setActiveAccordion] = useState()
  const getContext = useTemplateGetContextContext()
  const [menuContext, setMenuContext] = useState()

  useEffect(() => {
    setMenuContext(getContext('menu'))
  }, []);

  // TODO: might need to fix this to not re-render the entire thing after every accordion click
  useEffect(() => {
    let accordionBuilder = []
    for (let ctx in menuContext) {
      console.log("txt", ctx)
      console.log('textcontx ', menuContext[ctx])
      let field = menuContext[ctx]
      let summaryId = `${ctx}-header`
      let ariaControls = `${ctx}-content`

      accordionBuilder.push(
        <Accordion expanded={activeAccordion === ctx} onChange={() => {
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
            <Typography sx={{ width: '33%', flexShrink: 0 }} variant='button'>
              Menu - {ctx}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>{menuContext[ctx].name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* <ButtonGroup size='small' sx={{justifyContent:'center',display:'flex'}}>
              <Button endIcon={<DoNotDisturbOnRoundedIcon/>} color='info' variant='outlined' onClick={() => setActiveAccordion(null)}>close</Button>
            </ButtonGroup><br/> */}
            {Object.keys(field).map( (key) => {
              let display = field[key]

              if (key == 'menu_items'){
                let menuitems = []
                for (let item in field[key]){
                  menuitems.push( <Card>
                                <CardContent>
                                  {JSON.stringify(field[key][item])}
                                </CardContent>
                              </Card>)
                }
                display =   <Stack direction="row" spacing={2}>
                              {menuitems}
                            </Stack>
                
              }

              return  <Box>
                        <Divider>
                          <Chip label={key.toUpperCase()}/>
                        </Divider>
                        <Typography>
                          {display}
                        </Typography>
                      </Box>
            })}
          </AccordionDetails>
        </Accordion>
      )
    }
    setAccordion(accordionBuilder)
  }, [menuContext, activeAccordion]);
  

return (
  <Box sx={{
      width: 'auto'
    }}>
      <Typography variant='button'>Headers</Typography>
      {accordion}
  </Box>
)
}

export default ViewMenu
