import { v4 as uuid } from 'uuid';
import React, {useContext, useState, createContext, useEffect} from 'react'

const ElementsContext = createContext()
const ElementsAddNodeContext = createContext()
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

// use this hook to add elements
// pass in the element name 
export function useElementsAddNodeContext() {
    return useContext(ElementsAddNodeContext)
}

// use this hook to add transition
export function useElementsAddTransitionContext() {
    return useContext(ElementsAddTransitionContext)
}


// creating context and custom hook to deal with elements in multiple components
export function ElementsProvider({ children }) {
    const [elements, setElements] = useState()

    useEffect(() => {
        setDefault(setElements)
    }, []);

    useEffect(() => {
        console.log('NEW??? eeeelements ', elements)
        localStorage.getItem('elements') !== null && elements !== undefined ? localStorage.setItem('elements', JSON.stringify(elements)) : ''
    }, [elements]);

    const addElement = (newElement) => {
        let newId = uuid()
        console.log('new id ', newId)
        console.log('eeeelements ', newElement)
        let elelen = elements.length-1
        let ele = {
            data: { id: newId, label: newElement }, position: { x: elelen*25, y: elelen*25 }
        }
        setElements(oldEles => [...oldEles, ele])
    }

    const addTransition = (newTransition) => {
        console.log('new transition .... ', newTransition)
        let newId = uuid()
        let tran = {
            data: { source: newTransition.nodeFrom, target: newTransition.nodeTo, label: newTransition.transitionName }
        }
        setElements(oldEles => [...oldEles, tran])
    }

    return (
        <ElementsContext.Provider value={elements}>
            <ElementsAddNodeContext.Provider value ={addElement}>
                <ElementsAddTransitionContext.Provider value={addTransition}>
                    {children}
                </ElementsAddTransitionContext.Provider>
            </ElementsAddNodeContext.Provider>
        </ElementsContext.Provider>
    )
}