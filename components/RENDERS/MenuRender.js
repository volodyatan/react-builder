// react
import { useEffect, useState } from 'react'

// material ui
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

// icons
import * as MuiIcons from '@mui/icons-material'

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

    const [renderMenuItems, setRenderMenuItems] = useState()

    useEffect(() => {
        console.log('menu items ', menuItems)
        
    }, []);

  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            {console.log(MuiIcons['Add'])}
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          {/* <ListItemIcon>
            <Icons.ContentCopy fontSize="small" />
          </ListItemIcon> */}
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          {/* <ListItemIcon>
            <Icons.ContentPaste fontSize="small" />
          </ListItemIcon> */}
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
      </MenuList>
    </Paper>
  )
}

export default MenuRender