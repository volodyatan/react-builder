import React from 'react'
import { Drawer, Box, IconButton, ListSubheader } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CytoList from './CytoList';
import Draggable from "react-draggable";

const CytoDrawer = ( {openDrawer, setOpenDrawer} ) => {
  return (
    <Draggable 
        bounds={{left: -1250, top: 0, right: 0, bottom: 300}}
        cancel='.cytolist'
        // handle='strong'
        // bounds='parent'
    >
        <Drawer
            sx={{
                width: 'auto',
                height: '70%',
                position: 'absolute',
                // right: '10',
                flexShrink: 0,
                // color: 'grey',
                '& .MuiDrawer-paper': {
                    // width: 'auto',
                    borderRadius: 5,
                    backgroundColor: '#F0F8FF',
                    minWidth: "250px",
                    position: "absolute",
                    right: "10%",
                    top: '10%',
                    bottom: '10%',
                    height: "80%",
                    zIndex: '9999',
                    flexGrow: 1,
                    cursor: "move"
                },
            }}
            SlideProps={{ unmountOnExit: true }}
            variant="persistent"
            anchor="right"
            open={openDrawer}
            >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                // padding: spacing(0, 1),
                // necessary for content to be below app bar
                // ...theme.mixins.toolbar,
                justifyContent: 'flex-start',
            }}>
                <IconButton onClick={()=> setOpenDrawer(false)}>
                    <ChevronRightIcon/>
                </IconButton>
                    <ListSubheader sx={{backgroundColor:'#F0F8FF'}}>
                    Options
                    </ListSubheader>
            </Box>
            <div className='cytolist'>
                <CytoList setOpenDrawer={setOpenDrawer}/>
            </div>
        </Drawer>
    </Draggable>
  )
}

export default CytoDrawer