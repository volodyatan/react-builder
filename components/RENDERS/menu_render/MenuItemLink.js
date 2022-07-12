import React from 'react'
import { MenuItem, ListItemIcon, ListItemText, Link } from '@mui/material'

const MenuItemLink = ( { item } ) => {
  return (
    <MenuItem>
        <ListItemIcon>
            {/* <SelectedIcon /> */}
        </ListItemIcon>
        <ListItemText>
            <Link href={item.data.link_url} target='_blank' rel="noopener" underline='never' color='inherit'>
            {item.label_text}
            </Link>
        </ListItemText>
    </MenuItem>
  )
}

export default MenuItemLink