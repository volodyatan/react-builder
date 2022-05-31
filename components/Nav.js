import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
function Nav() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    
  )
}

export default Nav