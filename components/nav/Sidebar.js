import React, { useEffect, useState } from 'react'
import styles from '../../styles/Sidebar.module.css'
import { AppBar, Toolbar, IconButton, Typography, Box, MenuList, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { SideBarItems } from './SidebarItems';
import { grey } from '@mui/material/colors';
import { alpha } from "@mui/material";

const sidebarClosed = {
    backgroundColor: grey[900],
    width: 'auto',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: '-100%',
    transition: '400ms'
}

const sidebarOpened = {
    backgroundColor: grey[900],
    width: 'auto',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: '-100%',
    transition: '400ms',
    left: 0,
    zIndex: 9999,
}

const Sidebar = ( {sidebar, toggleSidebar} ) => {
    const [sidebarStyle, setSidebarStyle] = useState(sidebarClosed)

    useEffect(() => {
        sidebar ? setSidebarStyle(sidebarOpened) : setSidebarStyle(sidebarClosed)
    }, [sidebar]);

    return (
        <div>
            <Box sx={sidebarStyle}>
                {/* <h3>Sidebar</h3> */}
                <MenuList>
                    <MenuItem sx={{ mr: 2, color: 'white'}} onClick={toggleSidebar}>
                        <ListItemIcon >
                            <CloseRoundedIcon sx={{color: 'white'}}/>
                        </ListItemIcon>
                    </MenuItem>
                    {SideBarItems.map((item, idx) => {
                        return (
                        <MenuItem sx={{ mr: 2, color: 'white'}} onClick={()=>{
                            toggleSidebar()

                        }}>
                            <ListItemIcon >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>
                                {item.title}
                            </ListItemText>
                        </MenuItem>
                        )
                    })}
                </MenuList>
                
            </Box>
            {sidebar &&
               <Box 
               sx={{
                    backgroundColor: alpha(grey[900], 0.5),
                    position: 'fixed',
                    zIndex: 9998,
                    width: '100vh`',
                    height: '100vh',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    transition: '1000ms',
                    display: 'flex'
                }}
                onClick={toggleSidebar}/> 
            }
            
        </div>
        
    )
}

export default Sidebar