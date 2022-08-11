// react
import { useEffect, useState } from 'react'

// material ui
import Link from '@mui/material/Link'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button'

// icons
import * as MuiIcons from '@mui/icons-material'
import ListItemIcon from '@mui/material/ListItemIcon';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

// custom components
import InputText from './InputText';
import InputDate from './InputDate';
import InputTime from './InputTime';
import InputSelect from './InputSelect';
import InputPhoneNumber from './InputPhoneNumber';
import InputEmail from './InputEmail';
import ButtonRender from '../button_render/ButtonRender';

// variants: 	
// https://mui.com/material-ui/api/typography/

const InputRender = ( { inputs } ) => {

    const [renderInputItems, setRenderInputItems] = useState(<></>)
    
    useEffect(() => {
        let allInputs = []

        // build renderMenuItems
        for (let item of inputs.inputs){
          console.log('item ', item)
          if (item.type == 'divider'){
            allInputs.push(<Divider key={JSON.stringify(item)} />)
          }else if (item.type == 'text'){

            allInputs.push(
              <InputText key={JSON.stringify(item)} input={item} />
            )

          }else if( item.type == 'date'){

            allInputs.push(
              <InputDate key={JSON.stringify(item)} input={item} />
            )
          }else if( item.type == 'time'){

            allInputs.push(
              <InputTime key={JSON.stringify(item)} input={item} />
            )
          }else if( item.type == 'select'){

            allInputs.push(
              <InputSelect key={JSON.stringify(item)} input={item} />
            )
          }else if( item.type == 'tel'){

            allInputs.push(
              <InputPhoneNumber key={JSON.stringify(item)} input={item} />
            )
          }else if( item.type == 'email'){

            allInputs.push(
              <InputEmail key={JSON.stringify(item)} input={item} />
            )
          }else if( item.type == 'submit') {
            
            allInputs.push(
              <Button key={JSON.stringify(item)} type='submit'> Submit </Button>
            )
          }
        }

        setRenderInputItems(
          // TODO: get values from form
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            // noValidate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault()
              for (let t in e.target){
                console.log('t ', t)
              }
            }}
          >
            {allInputs}
          </Box>
        )
    }, []);

  return (
    <Box>
      {renderInputItems}
    </Box>
  )
}

export default InputRender