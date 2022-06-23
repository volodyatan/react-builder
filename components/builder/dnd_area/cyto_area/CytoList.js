import {useState, useEffect} from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AdjustRoundedIcon from '@mui/icons-material/AdjustRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LanRoundedIcon from '@mui/icons-material/LanRounded';

import ModalBase from '../modals/ModalBase';
import Box from '@mui/material/Box';

const buttonOpen = {border: 1, borderBottom: 0, borderTopLeftRadius: 5, borderTopRightRadius: 5, boxShadow: 1}

export default function CytoList( {setOpenDrawer} ) {
  const [modalMode, setModalMode] = useState(false)
  const [modalRender, setModalRender] = useState(<></>)

  const [nodeButtonOpen, setNodeButtonOpen] = useState(false)
  const [transitionsButtonOpen, setTransitionsButtonOpen] = useState(false)
  
  const [openNodeList, setOpenNodeList] = useState(false);
  const [openTransitionsList, setOpenTransitionsList] = useState(false)

  useEffect(() => {
    if (modalMode !== false){
      setModalRender(<ModalBase modalMode={modalMode} setModalMode={setModalMode}/>)
    }else{
      setModalRender(<></>)
    }
  }, [modalMode]);

  const toggleList = (list) => {
    if (list === 'node'){
      setOpenNodeList(!openNodeList);
      if(!nodeButtonOpen){
        setNodeButtonOpen(buttonOpen)
      }else{
        setNodeButtonOpen(false)
      }
    }else if (list === 'transitions'){
      setOpenTransitionsList(!openTransitionsList);
      if(!transitionsButtonOpen){
        setTransitionsButtonOpen(buttonOpen)
      }else{
        setTransitionsButtonOpen(false)
      }
    }
  };

  return (
    <Box sx={{}}>
      <List
        sx={{ width: 'auto'}}
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader sx={{boxShadow: 1}} component="div" id="nested-list-subheader">
        //     Options
        //   </ListSubheader>
        // }
      >
        <ListItemButton sx={transitionsButtonOpen} onClick={()=> toggleList('transitions')}>
          <ListItemIcon>
            <LanRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Transitions" />
          {openTransitionsList ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openTransitionsList} timeout="auto" unmountOnExit>
          <List sx={{border: 1, borderTop: 0, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, boxShadow: 1}} component="div" disablePadding>
            <ListItemButton sx={{ pl: 4}} onClick={()=> {
              // setOpenDrawer(false)
              setModalMode('transition')
            }}>
              <ListItemIcon>
                <AddBoxRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Add Transition" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton sx={nodeButtonOpen} onClick={()=> toggleList('node')}>
          <ListItemIcon>
            <AdjustRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Nodes" />
          {openNodeList ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openNodeList} timeout="auto" unmountOnExit>
          <List sx={{border: 1, borderTop: 0, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, boxShadow: 1}} component="div" disablePadding>
            <ListItemButton sx={{ pl: 4}} onClick={()=> {
              // setOpenDrawer(false)
              setModalMode('node')
              }}>
              <ListItemIcon>
                <AddCircleOutlineRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Add node" />
            </ListItemButton>
          </List>
        </Collapse>

      </List>
      {modalRender}
    </Box>
  );
}
