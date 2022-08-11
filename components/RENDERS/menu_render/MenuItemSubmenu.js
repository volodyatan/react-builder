// react/next
import React from 'react'
import { useState } from 'react'

// material ui
import { MenuItem, ListItemIcon, ListItemText, Box, Collapse } from '@mui/material'

// icons
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

// custom components
import MenuRender from './MenuRender'

const MenuItemSubmenu = ( { item } ) => {
    const [open, setOpen] = useState(false)

  return (
    <Box>
        <MenuItem onClick={() => setOpen((prev) => !prev)}>
        <ListItemIcon>
            {/* <SelectedIcon /> */}
        </ListItemIcon>
        <ListItemText>  
            {item.label_text}
        </ListItemText>
            {open ? <ExpandLess /> : <ExpandMore />}
        </MenuItem>
        
        <Collapse in={open} timeout='auto' unmountOnExit>
            <MenuRender menuItems={item.data.menu_items}/>
        </Collapse>
    </Box>
  )
}

export default MenuItemSubmenu