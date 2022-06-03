import CytoscapeComponent from 'react-cytoscapejs';
import cxtmenu from 'cytoscape-cxtmenu';
import Cytoscape from 'cytoscape'
import styles from '../../../../styles/CytoComponent.module.css'

import { useState, useEffect, useCallback } from 'react';
import { useElementsContext, useElementsAddContext } from '../../../CONTEXT/ElementsProvider';
import { Popover } from '@mui/material';

Cytoscape.use(cxtmenu)

const CytoComponent = (  ) => {
    const [cy, setCy] = useState(null)
    const [cyStyle, setCyStyle] = useState({ width: '600px', height: '600px' })
    const elements = useElementsContext()

    const [rightClickMenu, setRightClickMenu] = useState(<></>)
    
    useEffect(() => {
        console.log('CY  ', cy)
        // cy.centre()
        if (typeof cy !== Object)
            return
        setCyStyle({ width: '100%' })
        cy.centre()
    }, [cy]);

    const openPopOver = (e) => {

    }

    const rightclick = useCallback((e) =>{
        console.log('CLICKED!!! ... E', e)
        let target = e.target
        let position = e.renderedPosition
        if (target.length > 0){
            if(target.isNode()){
                // TODO: working on context menu: https://github.com/iVis-at-Bilkent/cytoscape.js-context-menus
                // change to this one tho... https://github.com/cytoscape/cytoscape.js-cxtmenu
                
                console.log('its element')
                console.log('node data', target.data())

                // console.log('position ', position)
                // setRightClickMenu(
                //     <Popover
                //         anchorReference="anchorPosition"
                //         anchorPosition={{ top: position.y, left: position.x }}
                //         anchorOrigin={{
                //         vertical: 'top',
                //         horizontal: 'left',
                //         }}
                //         transformOrigin={{
                //         vertical: 'top',
                //         horizontal: 'left',
                //         }}
                //     >
                //         <h1>so cool</h1>
                //     </Popover>
                // )
            }
        }
        if (e.button === 2) {
            console.log('right click')
        }
    }, [setRightClickMenu])

    // useEffect(() => {
    //     if (cy !== null){
    //         // let cyto = document.getElementById('cyto')
    //         cy.on('cxttapstart', rightclick)
    //         return () => cy.removeListener('cxttapstart')
    //     }
    // }, [cy]);

    useEffect(() => {
      if (cy !== null) {
        let defaults = {
          menuRadius: function(ele){ return 75; }, // the outer radius (node center to the end of the menu) in pixels. It is added to the rendered size of the node. Can either be a number or function as in the example.
          selector: 'node', // elements matching this Cytoscape.js selector will trigger cxtmenus
          commands: [ // an array of commands to list in the menu or a function that returns the array
            
            { // example command
              fillColor: 'rgba(200, 200, 200, 0.75)', // optional: custom background color for item
              content: 'add transition', // html/text content to be displayed in the menu
              contentStyle: {}, // css key:value pairs to set the command's css in js if you want
              select: function(ele){ // a function to execute when the command is selected
                console.log('first ',  ele.id() ) // `ele` holds the reference to the active element
              },
              enabled: true // whether the command is selectable
            },
            { // example command
              fillColor: 'rgba(200, 200, 200, 0.75)', // optional: custom background color for item
              content: 'delete node', // html/text content to be displayed in the menu
              contentStyle: {}, // css key:value pairs to set the command's css in js if you want
              select: function(ele){ // a function to execute when the command is selected
                console.log('second',  ele.id() ) // `ele` holds the reference to the active element
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
          itemColor: 'black', // the colour of text in the command's content
          itemTextShadowColor: 'transparent', // the text shadow colour of the command's content
          zIndex: 9999, // the z-index of the ui div
          atMouse: false, // draw menu at mouse position
          outsideMenuCancel: true // if set to a number, this will cancel the command if the pointer is released outside of the spotlight, padded by the number given 
        };
        // console.log('cy ', cy)
        let menu = cy.cxtmenu(defaults)
        return () => menu.destroy()
      }
    }, [cy]);

    

    return (
        <div>
            <CytoscapeComponent id="cyto" className={styles.cyto} elements={elements} style={cyStyle} onChange={(c) => console.log('cy', c)} cy={(cy) => { 
                    cy.centre()
                    // console.log('cyyy ', cy)
                    setCy(cy)
                }} />
            {rightClickMenu}
        </div>
    )
}

export default CytoComponent