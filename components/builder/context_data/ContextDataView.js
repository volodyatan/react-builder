// react
import React from 'react'

// material ui
import { Drawer, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material';

// TODO: work on this component
const ContextDataView = () => {
  return (
    <div>
        <Drawer
            sx={{
                width: 'auto',
                height: '100%',
                position: 'relative',
                flexShrink: 0,
                // color: 'grey',
                '& .MuiDrawer-paper': {
                    // width: 'auto',
                    borderRadius: 1,
                    backgroundColor: 'grey',
                    minWidth: "250px",
                    top: '10%',
                    height: "90%",
                    flexGrow: 1,
                },
            }}
            variant="persistent"
            anchor="left"
            open={true}
        >
            {drawerList}
        </Drawer>
        <p>items</p>

    </div>
  )
}

export default ContextDataView


const drawerList = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );