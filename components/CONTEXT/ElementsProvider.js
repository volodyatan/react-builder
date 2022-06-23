// react
import React, {useContext, useState, createContext, useEffect} from 'react'

// installed libaries
import { v4 as uuid } from 'uuid';

const CyContext = createContext()
const CySetContext = createContext()
const CySaveLocalStorageContext = createContext()
const CySetUndoRedoContext = createContext()
const CyUndoRedoActionContext = createContext()
const CyActionContext = createContext()

const ElementsAddNodeContext = createContext()
const ElementsDeleteNodeContext = createContext()
const ElementsAddTransitionContext = createContext()

const setDefault = (cy) => {
    if(localStorage.getItem('elements') === null){
        localStorage.setItem('elements', JSON.stringify([
            { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
            { data: { id: 'two', label: 'Node 2' }, position: { x: 400, y: 100 } },
            { data: { source: 'one', target: 'two', label: 'Node1 to Node2' } }]))
    }
    cy.json({elements: JSON.parse(localStorage.getItem('elements'))})
}

// use this hook for cy component
export function useCyContext() {
    return useContext(CyContext)
}
// set cy
export function useCySetContext() {
    return useContext(CySetContext)
}
// for saving elements to local storage
export function useCySaveLocalStorageContext() {
    return useContext(CySaveLocalStorageContext)
}
// for setting undo-redo
export function useCySetUndoRedoContext() {
    return useContext(CySetUndoRedoContext)
}
// for performing undo-redo actions
export function useCyUndoRedoActionContext() {
    return useContext(CyUndoRedoActionContext)
}
// for misc cytoscape actions
export function useCyActionContext() {
    return useContext(CyActionContext)
}

// use this hook to add nodes
// pass in the node name 
export function useElementsAddNodeContext() {
    return useContext(ElementsAddNodeContext)
}
// use this hook to delete nodes
// pass in the node id to be deleted
export function useElementsDeleteNodeContext() {
    return useContext(ElementsDeleteNodeContext)
}

// use this hook to add transition
export function useElementsAddTransitionContext() {
    return useContext(ElementsAddTransitionContext)
}

// creating context and custom hook to deal with elements in multiple components
export function ElementsProvider({ children }) {
    const [cy, setCy] = useState(null)
    const [undoredo, setUndoredo] = useState(null)

    // initialize elements in local storage, or load elements from local storage if they exist already 
    useEffect(() => {
        if (cy !== null){
            setDefault(cy)

            cy.style(cytostyle)
            cy.centre()
            cy.maxZoom(2.0)
            cy.minZoom(0.2)
        }
    }, [cy]);

    const saveCyLocalStorage = () => {
        // console.log('cy ele ', cy.elements().map(ele => ele.json()))
        localStorage.setItem('elements', JSON.stringify(cy.elements().map(ele => ele.json())))
    }

    const undoRedoAction = (action) => {
        if (action === 'undo') {
            console.log ('duno?')
            undoredo.undo()
        }else if (action === 'redo') {
            console.log('redoooo')
            undoredo.redo()
        }
    }

    // cy misc actions
    const cyAction = (action) => {
        if (action === 're-center'){
            cy.fit()
        }
    }

    // NODES
    const addNode = (newElement) => {
        // create unique id for node
        let newId = uuid()
        // let elelen = elements.length-1
        let ele = {
            data: { id: newId, label: newElement }, position: { x: 5*25, y: 5*25 }
        }
        // use undoredo to perform add action
        undoredo.do('add', ele)
    }

    // TODO: keep removed elements in limbo to add back later (eg. undo function)
    // OR can use stack to keep track of entire states of builder and restore previous states
    const deleteNode = (elementId) => {

        // find nodes to delete using cy selector
        let selected = cy.$(`[id = '${elementId}'],[source = '${elementId}'],[target = '${elementId}']`)
        undoredo.do('remove', selected)
    }

    // TRANSITIONS
    const addTransition = (newTransition) => {
        let tran = {
            data: { source: newTransition.nodeFrom, target: newTransition.nodeTo, label: newTransition.transitionName }
        }
        // cy.add(tran)
        undoredo.do('add', tran)
    }

    return (
        <CyContext.Provider value={cy}>
            <CySetContext.Provider value={setCy}>
                <CySaveLocalStorageContext.Provider value={saveCyLocalStorage}>
                    <CySetUndoRedoContext.Provider value={setUndoredo}>
                        <CyUndoRedoActionContext.Provider value={undoRedoAction}>
                            <CyActionContext.Provider value={cyAction}>
                                <ElementsAddNodeContext.Provider value ={addNode}>
                                    <ElementsDeleteNodeContext.Provider value={deleteNode}>
                                        <ElementsAddTransitionContext.Provider value={addTransition}>
                                            {children}
                                        </ElementsAddTransitionContext.Provider>
                                    </ElementsDeleteNodeContext.Provider>
                                </ElementsAddNodeContext.Provider>
                            </CyActionContext.Provider>
                        </CyUndoRedoActionContext.Provider>
                    </CySetUndoRedoContext.Provider>
                </CySaveLocalStorageContext.Provider>
            </CySetContext.Provider>
        </CyContext.Provider>
        
    )
}

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