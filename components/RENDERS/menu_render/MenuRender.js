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

// icons
import * as MuiIcons from '@mui/icons-material'
import ListItemIcon from '@mui/material/ListItemIcon';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

// custom components
import MenuItemSubmenu from './MenuItemSubmenu';
import MenuItemLink from './MenuItemLink';

// variants: 	
//   'body1'
// | 'body2'
// | 'button'
// | 'caption'
// | 'h1'
// | 'h2'
// | 'h3'
// | 'h4'
// | 'h5'
// | 'h6'
// | 'inherit'
// | 'overline'
// | 'subtitle1'
// | 'subtitle2'
// https://mui.com/material-ui/api/typography/

const MenuRender = ( { menuItems } ) => {

    const [renderMenuItems, setRenderMenuItems] = useState(<></>)
    const [submenuControl, setSubmenuControl] = useState({})
    
    useEffect(() => {
        let allItems = []

        // build renderMenuItems
        for (let item of menuItems){
          if (item.type == 'divider'){
            allItems.push(<Divider/>)
          }else if (item.type == 'link'){
            let SelectedIcon = <></>
            try {
              SelectedIcon = MuiIcons[item.icon]
            }catch (e){
              console.log(`"${item.icon}" ICON NOT FOUND`)
            }
            allItems.push(
              <MenuItemLink item={item} />
            )
          // TODO: change submenu to use popover https://github.com/jcoreio/material-ui-popup-state
          }else if( item.type == 'submenu'){
            setSubmenuControl((prev) => {
              prev[item.label] = false
              return prev
            })
            allItems.push(
              <MenuItemSubmenu item={item} />
            )
          } 
        }

        setRenderMenuItems(
          <Paper sx={{ width: 320, maxWidth: '100%' }}>
            <MenuList>
              {allItems}
            </MenuList>
          </Paper>
        )
    }, []);

  return (
    <Box>
      {renderMenuItems}
    </Box>
  )
}

export default MenuRender