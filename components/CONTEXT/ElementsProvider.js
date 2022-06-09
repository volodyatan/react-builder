import { v4 as uuid } from 'uuid';
import React, {useContext, useState, createContext, useEffect} from 'react'

const ElementsContext = createContext()
const ElementsAddNodeContext = createContext()
const ElementsDeleteNodeContext = createContext()
const ElementsAddTransitionContext = createContext()

const setDefault = (setElements) => {
    if(localStorage.getItem('elements') === null){
        localStorage.setItem('elements', JSON.stringify([
            { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
            { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
            { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }]))
    }
    return setElements(JSON.parse(localStorage.getItem('elements')))
}

// use this hook to get the elements
export function useElementsContext() {
    return useContext(ElementsContext)
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
    const [elements, setElements] = useState()

    // initialize elements in local storage, or load elements from local storage if they exist already 
    useEffect(() => {
        setDefault(setElements)
    }, []);

    // every time elements gets updated, save to local storage
    useEffect(() => {
        localStorage.getItem('elements') !== null && elements !== undefined ? localStorage.setItem('elements', JSON.stringify(elements)) : ''
    }, [elements]);

    // NODES
    const addNode = (newElement) => {
        // create unique id for node
        let newId = uuid()
        let elelen = elements.length-1
        let ele = {
            data: { id: newId, label: newElement }, position: { x: elelen*25, y: elelen*25 }
        }
        setElements(oldEles => [...oldEles, ele])
    }
    const deleteNode = (elementId) => {
        // making deep copy
        elems = JSON.parse(JSON.stringify(elements))
        elems = elems.filter((item)=> item.data.id !== elementId)
        setElements(elems)
    }

    // TRANSITIONS
    const addTransition = (newTransition) => {
        let tran = {
            data: { source: newTransition.nodeFrom, target: newTransition.nodeTo, label: newTransition.transitionName }
        }
        setElements(oldEles => [...oldEles, tran])
    }

    return (
        <ElementsContext.Provider value={elements}>
            <ElementsAddNodeContext.Provider value ={addNode}>
                <ElementsDeleteNodeContext.Provider value={deleteNode}>
                    <ElementsAddTransitionContext.Provider value={addTransition}>
                        {children}
                    </ElementsAddTransitionContext.Provider>
                </ElementsDeleteNodeContext.Provider>
            </ElementsAddNodeContext.Provider>
        </ElementsContext.Provider>
    )
}