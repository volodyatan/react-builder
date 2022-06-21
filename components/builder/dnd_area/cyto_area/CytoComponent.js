import CytoscapeComponent from 'react-cytoscapejs';
import cxtmenu from 'cytoscape-cxtmenu';
import Cytoscape from 'cytoscape'
import styles from '../../../../styles/CytoComponent.module.css'

import { useState, useEffect } from 'react';
import { useElementsContext, useElementsAddContext, useElementsDeleteNodeContext } from '../../../CONTEXT/ElementsProvider';
import AddNodeModal from '../modals/AddNodeModal';
import AddTransitionModal from '../modals/AddTransitionModal';
import { Popover, Icon, Modal } from '@mui/material';
import CytoList from './CytoList.js'

Cytoscape.use(cxtmenu)

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
    const [cyInitizalized, setCyInitizalized] = useState(false)
    const [cy, setCy] = useState(null)
    const [cyStyle, setCyStyle] = useState({ width: '1000px', height: '800px' })
    
    const elements = useElementsContext()
    const addElement = useElementsAddContext
    const deleteNode = useElementsDeleteNodeContext()

    const [modalOpen, setModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState(<></>)

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

    // useEffect(() => {
      
    //   setInitialElements(JSON.parse(JSON.stringify(elements)))
      
    // }, [elements]);

    useEffect(() => {
        console.log('CY  ', cy)
        // cy.centre()
        if (typeof cy !== Object)
            return

        setCyStyle({ width: '100px', height: '100px' })
        // cy.centre()
    }, [cy]);


    // const rightclick = useCallback((e) =>{
    //     console.log('CLICKED!!! ... E', e)
    //     let target = e.target
    //     let position = e.renderedPosition
    //     if (target.length > 0){
    //         if(target.isNode()){
    //             // TODO: working on context menu: https://github.com/iVis-at-Bilkent/cytoscape.js-context-menus
    //             // change to this one tho... https://github.com/cytoscape/cytoscape.js-cxtmenu
                
    //             console.log('its element')
    //             console.log('node data', target.data())
    //         }
    //     }
    //     if (e.button === 2) {
    //         console.log('right click')
    //     }
    // }, [setRightClickMenu])

    // useEffect(() => {
    //     if (cy !== null){
    //         // let cyto = document.getElementById('cyto')
    //         cy.on('cxttapstart', rightclick)
    //         return () => cy.removeListener('cxttapstart')
    //     }
    // }, [cy]);

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
                deleteNode(ele.id(), cy)
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
    }, [cy]);

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
    }, [cy]);

    

    return (
      <div className={styles.flexContainer}>
        <div className={styles.flexCyto}>
            {/* TODO: on node drop, update local storage position of node */}
            <CytoscapeComponent id="cyto" className={styles.cyto} elements={[...elements]} style={cyStyle} onChange={(c) => console.log('CHANGNING... cy', c)} cy={(cy) => { 
                    cy.style(cytostyle)
                    cy.centre()
                    console.log('cyyy ', cy)
                    // turning event listener off before turning it on so that new listeners aren't created every time a re-render happens
                    cy.off('add remove').on('add remove', () => {
                      console.log('CY IS CHANINGGGG')
                      
                    })
                    setCy(cy)
                }} />
              <Modal open={modalOpen} onClose={handleModalClose} onContextMenu={(e)=> e.preventDefault()}>
                <div>
                  {modalContent}
                </div>
              </Modal>
            {/* {rightClickMenu} */}
        </div>
        <div className={styles.flexCytoSidebar}>
            <CytoList/>
        </div>  
      </div>
        
    )
}

export default CytoComponent