import Link from 'next/link'
import styles from '../../styles/Nav.module.css'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';

function Nav() {

  const theme = createTheme({
    palette: {
      dark: {
        // Purple and green play nicely together.
        main: grey[900],
      },
      lightButton:{
        main: grey[400]
      }
    },
  });

  const [sidebar, setSidebar] = useState(false)

  const toggleSidebar = () => setSidebar((curr) => !curr)


  useEffect(() => {
    console.log("side bare is now ", sidebar)
    // sidebar ? setRenderSidebar(<Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />) : setRenderSidebar(<></>)
  }, [sidebar]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" color="dark" elevation={1}>
          <Toolbar variant="dense">
            <IconButton edge="start" color="lightButton" aria-label="menu" sx={{ mr: 2 }} onClick={toggleSidebar}>
              <MenuIcon />
            </IconButton>


          </Toolbar>
        </AppBar>
        <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
      </ThemeProvider>
    </div>
    
  )
}

export default Nav