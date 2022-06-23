import CytoscapeComponent from 'react-cytoscapejs';
import cxtmenu from 'cytoscape-cxtmenu';
import undoRedo from "cytoscape-undo-redo";
import Cytoscape from 'cytoscape'
import styles from '../../../../styles/CytoComponent.module.css'

import { useState, useEffect } from 'react';
import { useElementsAddNodeContext, useElementsDeleteNodeContext, useCySaveLocalStorageContext, useCySetUndoRedoContext, useCyUndoRedoActionContext } from '../../../CONTEXT/ElementsProvider';
import { useCyContext, useCySetContext } from '../../../CONTEXT/ElementsProvider';
import AddNodeModal from '../modals/AddNodeModal';
import AddTransitionModal from '../modals/AddTransitionModal';
import CytoDrawer from './CytoDrawer';
import { Modal, Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import UndoRoundedIcon from '@mui/icons-material/UndoRounded';
import RedoRoundedIcon from '@mui/icons-material/RedoRounded';
import { Checkmark } from 'react-checkmark'

Cytoscape.use(cxtmenu)
Cytoscape.use(undoRedo)

const cytostyle = [ 
  {
    "selector": "node",
    "style": {
      "background-color": "LightSkyBlue",
      "label": "data(label)",
      "text-wrap": "wrap",
      "shape": "round-rectangle",
      "width": "200",
      "height": "75",
      "text-max-width": "200",
      // "text-overflow-wrap": "anywhere",
      "text-valign": "center",
      "text-halign": "center",
      "font-size": "19",
      "border-width": "2",
      "border-color": "#4169E1",
      "padding": "3"
    }
  },
  {
    "selector": "edge",
    "style": {
      "width": 2,
      "line-color": "black",
      "target-arrow-color": "black",
      "target-arrow-shape": "triangle-backcurve",
      "arrow-scale": "2",
      "curve-style": "bezier",
      "label": "data(label)",
      "target-endpoint": "outside-to-node-or-label",
      "text-rotation": "autorotate",
      "text-margin-y": "-12",
      "text-wrap": "wrap",
      "text-max-width": "1000"
    }
  },
  {
    "selector": ":parent",
    "style": {
      "text-valign": "top",
      "text-halign": "center",
      "background-color": "Gainsboro"
    }
  },
  {
    "selector": ".eh-handle",
    "style": {
      "background-color": "red",
      "width": 12,
      "height": 12,
      "shape": "ellipse",
      "overlay-opacity": 0,
      "border-width": 12, 
      "border-opacity": 0
    }
  },

  {
    "selector": ".eh-hover",
    "style": {
      "background-color": "red"
    }
  },

  {
    "selector": ".eh-source",
    "style": {
      "border-width": 2,
      "border-color": "red"
    }
  },

  {
    "selector": ".eh-target",
    "style": {
      "border-width": 2,
      "border-color": "red"
    }
  },

  {
    "selector": ".eh-preview, .eh-ghost-edge",
    "style": {
      "background-color": "red",
      "line-color": "red",
      "target-arrow-color": "red",
      "source-arrow-color": "red"
    }
  }
]

const CytoComponent = (  ) => {
    const [cyStyle, setCyStyle] = useState({ width: '1000px', height: '800px' })

    const cy = useCyContext()
    const setCy = useCySetContext()
    const saveCy = useCySaveLocalStorageContext()
    const cySetUndoRedo = useCySetUndoRedoContext()
    const cyUndoRedo = useCyUndoRedoActionContext()
    const [undoset, setUndoset] = useState(false)

    const addElement = useElementsAddNodeContext()
    const deleteNode = useElementsDeleteNodeContext()

    const [modalOpen, setModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState(<></>)

    const [openDrawer, setOpenDrawer] = useState(false)

    // this controls the icon in the speed dial, shows checkmark when pressed
    // use changeSaveIcon to change icon from saving to idle
    const [saveIcon, setSaveIcon] = useState(<SaveAltIcon/>)

    const changeSaveIcon = (icon) =>{
      if (icon == 'saving'){
        setSaveIcon(<Checkmark color='#228B22' size='fill'/>)
      }else if (icon == 'idle'){
        setSaveIcon(<SaveAltIcon/>)
      }
    }

    const handleOpenAddNode = () => {
      setModalContent(<AddNodeModal close={handleModalClose}/>)
      setModalOpen(true)
    }
  
    const handleOpenAddTransition = (source) => {
      setModalContent(<AddTransitionModal close={handleModalClose} source={source} />)
      setModalOpen(true)
    }
  
    const handleModalClose = () => {
      setModalContent(<></>)
      setModalOpen(false)
    }

    useEffect(() => {
        console.log('CY  ', cy)
        // cy.centre()
        if (cy === null)
            return

        cy.style(cytostyle)
        cy.centre()
        console.log('cyyy ', cy)

        // turning event listeners off before turning them on so that new identical listeners aren't created every time a re-render happens
        // cy.off('add remove').on('add remove', () => {
        //   console.log('CY IS CHANINGGGG')
        //   let eles = cy.elements().map(ele => ele.data())
        //   console.log('cy ... ', eles)
        // })
        // cy.centre()
    }, [cy]);

    useEffect(() => {
      if (cy !== null) {
        let nodes = {
          menuRadius: function(ele){ return 100; }, // the outer radius (node center to the end of the menu) in pixels. It is added to the rendered size of the node. Can either be a number or function as in the example.
          selector: 'node', // elements matching this Cytoscape.js selector will trigger cxtmenus
          commands: [ // an array of commands to list in the menu or a function that returns the array
            
            { // example command
              // fillColor: 'rgba(0, 32, 0, 0.75)', // optional: custom background color for item
              fillColor: 'rgba(188, 43, 43,0.75)',
              content: '<p>delete node</p>', // html/text content to be displayed in the menu
              contentStyle: {}, // css key:value pairs to set the command's css in js if you want
              select: (ele) => { // a function to execute when the command is selected
                console.log('second',  ele.id() ) // `ele` holds the reference to the active element
                deleteNode(ele.id())
              },
              enabled: true // whether the command is selectable
            },
            { // example command
              // fillColor: 'rgba(48, 91, 212, 0.75)', // optional: custom background color for item
              content: '<p>add transition</p>', // html/text content to be displayed in the menu
              contentStyle: {}, // css key:value pairs to set the command's css in js if you want
              select: (ele) => { // a function to execute when the command is selected, `ele` holds the reference to the active element
                console.log('first ',  ele.id() )
                handleOpenAddTransition(ele.id())
              },
              enabled: true // whether the command is selectable
            },
            { // example command
              // fillColor: 'rgba(0, 32, 0, 0.75)', // optional: custom background color for item
              content: `<h6>CLOSE</h6>`, // html/text content to be displayed in the menu
              contentStyle: {}, // css key:value pairs to set the command's css in js if you want
              select: (ele) => { // a function to execute when the command is selected
                console.log('cancel' ) // `ele` holds the reference to the active element
              },
              enabled: true // whether the command is selectable
            }
          ], // function( ele ){ return [ /*...*/ ] }, // a function that returns commands or a promise of commands
          fillColor: 'rgba(0, 0, 0, 0.75)', // the background colour of the menu
          activeFillColor: 'rgba(1, 105, 217, 0.75)', // the colour used to indicate the selected command
          activePadding: 20, // additional size in pixels for the active command
          indicatorSize: 40, // the size in pixels of the pointer to the active command, will default to the node size if the node size is smaller than the indicator size, 
          separatorWidth: 10, // the empty spacing in pixels between successive commands
          spotlightPadding: 5, // extra spacing in pixels between the element and the spotlight
          adaptativeNodeSpotlightRadius: true, // specify whether the spotlight radius should adapt to the node size
          minSpotlightRadius: 24, // the minimum radius in pixels of the spotlight (ignored for the node if adaptativeNodeSpotlightRadius is enabled but still used for the edge & background)
          maxSpotlightRadius: 28, // the maximum radius in pixels of the spotlight (ignored for the node if adaptativeNodeSpotlightRadius is enabled but still used for the edge & background)
          openMenuEvents: 'cxttapstart taphold', // space-separated cytoscape events that will open the menu; only `cxttapstart` and/or `taphold` work here
          itemColor: 'white', // the colour of text in the command's content
          itemTextShadowColor: 'transparent', // the text shadow colour of the command's content
          zIndex: 9999, // the z-index of the ui div
          atMouse: false, // draw menu at mouse position
          outsideMenuCancel: 10 // if set to a number, this will cancel the command if the pointer is released outside of the spotlight, padded by the number given 
        };
        // console.log('cy ', cy)
        let menu = cy.cxtmenu(nodes)
        return () => menu.destroy()
      }
    }, [undoset]);

    useEffect(() => {
      if (cy !== null) {
        let core = {
          menuRadius: function(ele){ return 100; }, // the outer radius (node center to the end of the menu) in pixels. It is added to the rendered size of the node. Can either be a number or function as in the example.
          selector: 'core', // elements matching this Cytoscape.js selector will trigger cxtmenus
          commands: [ // an array of commands to list in the menu or a function that returns the array
            
            { // example command
              // fillColor: 'rgba(200, 200, 200, 0.75)', // optional: custom background color for item
              content: '<h6>Add Node</h6>', // html/text content to be displayed in the menu
              contentStyle: {}, // css key:value pairs to set the command's css in js if you want
              select: (ele) => { // a function to execute when the command is selected
                console.log('first ' )
                handleOpenAddNode()
              },
              enabled: true // whether the command is selectable
            },
            { // example command
              // fillColor: 'rgba(200, 200, 200, 0.75)', // optional: custom background color for item
              content: `<h6>CLOSE</h6>`, // html/text content to be displayed in the menu
              contentStyle: {content:'00d7'}, // css key:value pairs to set the command's css in js if you want
              select: (ele) => { // a function to execute when the command is selected
                console.log('cancel' ) // `ele` holds the reference to the active element
              },
              enabled: true // whether the command is selectable
            }
            
          ], // function( ele ){ return [ /*...*/ ] }, // a function that returns commands or a promise of commands
          fillColor: 'rgba(0, 0, 0, 0.75)', // the background colour of the menu
          activeFillColor: 'rgba(1, 105, 217, 0.75)', // the colour used to indicate the selected command
          activePadding: 10, // additional size in pixels for the active command
          indicatorSize: 14, // the size in pixels of the pointer to the active command, will default to the node size if the node size is smaller than the indicator size, 
          separatorWidth: 3, // the empty spacing in pixels between successive commands
          spotlightPadding: 4, // extra spacing in pixels between the element and the spotlight
          adaptativeNodeSpotlightRadius: false, // specify whether the spotlight radius should adapt to the node size
          minSpotlightRadius: 14, // the minimum radius in pixels of the spotlight (ignored for the node if adaptativeNodeSpotlightRadius is enabled but still used for the edge & background)
          maxSpotlightRadius: 28, // the maximum radius in pixels of the spotlight (ignored for the node if adaptativeNodeSpotlightRadius is enabled but still used for the edge & background)
          openMenuEvents: 'cxttapstart taphold', // space-separated cytoscape events that will open the menu; only `cxttapstart` and/or `taphold` work here
          itemColor: 'white', // the colour of text in the command's content
          itemTextShadowColor: 'transparent', // the text shadow colour of the command's content
          zIndex: 9999, // the z-index of the ui div
          atMouse: false, // draw menu at mouse position
          outsideMenuCancel: 10 // if set to a number, this will cancel the command if the pointer is released outside of the spotlight, padded by the number given 
        };
        // console.log('cy ', cy)
        let menu = cy.cxtmenu(core)
        return () => menu.destroy()
      }
    }, [undoset]);

    useEffect(() => {
      if (cy !== null){
        let options = {
          isDebug: false, // Debug mode for console messages
          actions: {},// actions to be added
          undoableDrag: true, // Whether dragging nodes are undoable can be a function as well
          stackSizeLimit: undefined, // Size limit of undo stack, note that the size of redo stack cannot exceed size of undo stack
          ready: function () { // callback when undo-redo is ready
            setUndoset(true)
          }
        }
        let undoredo = cy.undoRedo(options)
        cySetUndoRedo(undoredo)
        // setUndoset(true)
      }
    }, [cy]);

    return (
      <div className={styles.flexContainer}>
        <div className={styles.flexCyto}>
            {/* <Box
            sx={{
              width: 'fill',
              height: 'auto',
              backgroundColor: 'lightblue',
              '&:hover': {
                backgroundColor: 'orange',
                // opacity: [0.9, 0.8, 0.7], 
              },
            }}>

            
            </Box> */}
            <SpeedDial
              direction='right'
              ariaLabel="Cyto Options"
              sx={{ position: 'absolute', top: 10, left: 10 }}
              icon={<SpeedDialIcon />}
              onOpen={()=> changeSaveIcon('idle')}
            >
              <SpeedDialAction
                key='SaveCyto'
                icon={saveIcon}
                tooltipTitle='Save Cyto'
                onClick={()=> {
                  changeSaveIcon('idle')
                  saveCy()
                  changeSaveIcon('saving')
                }}
              />
              <SpeedDialAction
                key='UndoCyto'
                icon={<UndoRoundedIcon/>}
                tooltipTitle='Undo'
                onClick={()=> {
                  console.log('undoing')
                  cyUndoRedo('undo')
                }}
              />
              <SpeedDialAction
                key='RedoCyto'
                icon={<RedoRoundedIcon/>}
                tooltipTitle='Redo'
                onClick={()=> {
                  console.log('redoing')
                  cyUndoRedo('redo')
                }}
              />
            </SpeedDial>
            
            <SpeedDial
              hidden={openDrawer}
              ariaLabel="Open options"
              sx={{ position: 'absolute', top: -5, right: 10 }}
              icon={<ChevronLeftIcon />}
              onClick={()=> setOpenDrawer(true)}
            />
            {/* TODO: on node drop, update local storage position of node */}
            <CytoscapeComponent id="cyto" className={styles.cyto}  style={cyStyle} onChange={(c) => console.log('CHANGNING... cy', c)} cy={(newcy) => { 
                    // newcy.style(cytostyle)
                    // newcy.centre()
                    // console.log('cyyy ', newcy)
                    // // turning event listeners off before turning them on so that new identical listeners aren't created every time a re-render happens
                    // newcy.off('add remove').on('add remove', () => {
                    //   console.log('CY IS CHANINGGGG')
                    //   console.log('cy ... ', cy)
                    // })
                    setCy(newcy)
                }} />
              <Modal open={modalOpen} onClose={handleModalClose} onContextMenu={(e)=> e.preventDefault()}>
                <div>
                  {modalContent}
                </div>
              </Modal>
            {/* {rightClickMenu} */}
        </div>
        <div className={styles.flexCytoSidebar}>
          <CytoDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </div>  
      </div>
        
    )
}

export default CytoComponent