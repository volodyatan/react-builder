import { v4 as uuid } from 'uuid';
import React, {useContext, useState, createContext, useEffect} from 'react'

const CyContext = createContext()
const CySetContext = createContext()
const CySaveLocalStorageContext = createContext()

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

// use this hook to delete 

// creating context and custom hook to deal with elements in multiple components
export function ElementsProvider({ children }) {
    const [cy, setCy] = useState(null)

    // initialize elements in local storage, or load elements from local storage if they exist already 
    useEffect(() => {
        if (cy !== null){
            setDefault(cy)
        }
    }, [cy]);

    const saveCyLocalStorage = () => {
        // console.log('cy ele ', cy.elements().map(ele => ele.json()))
        localStorage.setItem('elements', JSON.stringify(cy.elements().map(ele => ele.json())))
    }

    // NODES
    const addNode = (newElement) => {
        // create unique id for node
        let newId = uuid()
        // let elelen = elements.length-1
        let ele = {
            data: { id: newId, label: newElement }, position: { x: 5*25, y: 5*25 }
        }
        cy.add(ele)
    }

    // TODO: keep removed elements in limbo to add back later (eg. undo function)
    // OR can use stack to keep track of entire states of builder and restore previous states
    const deleteNode = (elementId, cy) => {

        cy.remove(`[id = '${elementId}'],[source = '${elementId}'],[target = '${elementId}']`)
    }

    // TRANSITIONS
    const addTransition = (newTransition) => {
        let tran = {
            data: { source: newTransition.nodeFrom, target: newTransition.nodeTo, label: newTransition.transitionName }
        }
        cy.add(tran)
    }

    return (
        <CyContext.Provider value={cy}>
            <CySetContext.Provider value={setCy}>
                <CySaveLocalStorageContext.Provider value={saveCyLocalStorage}>
                    <ElementsAddNodeContext.Provider value ={addNode}>
                        <ElementsDeleteNodeContext.Provider value={deleteNode}>
                            <ElementsAddTransitionContext.Provider value={addTransition}>
                                {children}
                            </ElementsAddTransitionContext.Provider>
                        </ElementsDeleteNodeContext.Provider>
                    </ElementsAddNodeContext.Provider>
                </CySaveLocalStorageContext.Provider>
            </CySetContext.Provider>
        </CyContext.Provider>
        
    )
}