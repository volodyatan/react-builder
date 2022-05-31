import CytoscapeComponent from 'react-cytoscapejs';
import styles from '../../../../styles/CytoComponent.module.css'

import { useState, useEffect } from 'react';

const CytoComponent = ( {elements} ) => {
    const [cy, setCy] = useState()
    const [cyStyle, setCyStyle] = useState({ width: '600px', height: '600px' })

    
    useEffect(() => {
        console.log('CY  ', cy)
        // cy.centre()
        if (typeof cy !== Object)
            return
        setCyStyle({ width: '100%' })
        cy.centre()
    }, [cy]);

    return (
        <div>
            <CytoscapeComponent className={styles.cyto} elements={elements} style={cyStyle} cy={(cy) => { 
                    cy.centre()
                    setCy(cy) 
                }} />
        </div>
    )
}

export default CytoComponent