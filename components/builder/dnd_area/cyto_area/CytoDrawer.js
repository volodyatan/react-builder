// react/next
import { useEffect, useState } from 'react';

// material ui
import { Drawer, Box, IconButton, ListSubheader } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// custom componenets
import CytoList from './CytoList';

// external libraries
import Draggable from "react-draggable";

const CytoDrawer = ( {openDrawer, setOpenDrawer, cybound} ) => {
    const [leftBound, setLeftBound] = useState(0)
    const [rightBound, setRightBound] = useState(0)

    useEffect(() => {
        if (cybound !== undefined){
            setLeftBound(cybound[0])
            setRightBound(cybound[1])
        }
    }, [cybound]);

  return (
    // TODO: Change sidebar to come from right (full screen) when on smaller screens,
    // as opposed to current blue hovering square 
    <Draggable 
        bounds= {{left: -leftBound, top: 0, right: rightBound, bottom: 250}}
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