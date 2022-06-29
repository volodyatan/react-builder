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
                // toggleSidebar()
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
        return list
    }

  return (
    <Box sx={{
        width: 'auto'
      }}>
        <ListSubheader>
          Data Types
        </ListSubheader>
        <Divider />
        <MenuList>
            {renderList(textOptions)}
        </MenuList>
        <Divider />
        <MenuList>
            {renderList(mediaOptions)}
        </MenuList>
        <Divider />
        <MenuList>
            {renderList(multiOptions)}
        </MenuList>
      </Box>
  )
}

export default ContextDataList
