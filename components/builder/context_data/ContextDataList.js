// react
import React from 'react'

// material ui
import { Divider, ListItemIcon, ListItemText, ListSubheader, MenuList, MenuItem } from '@mui/material';
import { Box } from '@mui/system';

// custom componenets
import { textOptions, mediaOptions, multiOptions } from './ContextDataItems';

// TODO: work on this component
const ContextDataList = ( { setActive } ) => {

    const renderList = (options) => {
        let list = options.map((item, idx) => {
            return (
            <MenuItem key={idx} sx={{}} onClick={()=>{
                
                setActive(item.component)
            }}>
                <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
                <ListItemText>
                    {item.title}
                </ListItemText>
            </MenuItem>
            )
        })
        return  <MenuList>
                    {list}
                </MenuList> 
    }

  return (
    <Box sx={{
        width: 'auto'
      }}>
        <ListSubheader>
          Data Types
        </ListSubheader>
        <Divider />
        {renderList(textOptions)}
        <Divider />
        {renderList(mediaOptions)}
        <Divider />
        {renderList(multiOptions)}
      </Box>
  )
}

export default ContextDataList
