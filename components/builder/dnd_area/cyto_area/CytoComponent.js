import CytoscapeComponent from 'react-cytoscapejs';
import contextMenus from 'cytoscape-context-menus'
import Cytoscape from 'cytoscape'
import styles from '../../../../styles/CytoComponent.module.css'

import { useState, useEffect, useCallback } from 'react';
import { useElementsContext, useElementsAddContext } from '../../../CONTEXT/ElementsProvider';
import { Popover } from '@mui/material';

Cytoscape.use(contextMenus)

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
                let options = {
                    evtType: 'cxttap',
                    menuItems: [
                      {
                        id: 'remove', // ID of menu item
                        content: 'remove', // Display content of menu item
                        tooltipText: 'remove', // Tooltip text for menu item
                        image: {src : "remove.svg", width : 12, height : 12, x : 6, y : 4}, // menu icon
                        // Filters the elements to have this menu item on cxttap
                        // If the selector is not truthy no elements will have this menu item on cxttap
                        selector: 'node, edge', 
                        onClickFunction: function () { // The function to be executed on click
                          console.log('remove element');
                        },
                        disabled: false, // Whether the item will be created as disabled
                        show: false, // Whether the item will be shown or not
                        hasTrailingDivider: true, // Whether the item will have a trailing divider
                        coreAsWell: false // Whether core instance have this item on cxttap
                      },
                      {
                        id: 'hide',
                        content: 'hide',
                        tooltipText: 'hide',
                        selector: 'node, edge',
                        onClickFunction: function () {
                          console.log('hide element');
                        },
                        disabled: true
                      },
                      {
                        id: 'add-node',
                        content: 'add node',
                        tooltipText: 'add node',
                        image: {src : "add.svg", width : 12, height : 12, x : 6, y : 4},
                        selector: 'node',
                        coreAsWell: true,
                        onClickFunction: function () {
                          console.log('add node');
                        }
                      }
                    ],
                    menuItemClasses: [
                    ],
                    contextMenuClasses: [
                    ],
                    submenuIndicator: { src: 'assets/submenu-indicator-default.svg', width: 12, height: 12 }
                };
                let instance = cy.contextMenus(options)
                console.log('its element')
                console.log('node data', target.data())
                console.log('cy ', cy)

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

    useEffect(() => {
        if (cy !== null){
            // let cyto = document.getElementById('cyto')
            cy.on('cxttapstart', rightclick)
            return () => cy.removeListener('cxttapstart')
        }
    }, [cy]);

    // useEffect(() => {
    //     let cyto = document.getElementById('cyto')
    //     cyto.addEventListener('pointerdown', pointerdown)
    //     return () => cyto.removeEventListener('pointerdown', pointerdown)
    // }, [cy]);

    

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