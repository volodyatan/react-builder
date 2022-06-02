import React, {useContext, useState, createContext} from 'react'
import useElements from '../HOOKS/useElements'

const ElementsContext = createContext()
const ElementsAddContext = createContext()

export function useElementsContext() {
    return useContext(ElementsContext)
}

export function useElementsAddContext() {
    return useContext(ElementsAddContext)
}

const setDefault = () => {
    if(localStorage.getItem('elements') === null){
        localStorage.setItem('elements', JSON.stringify([
            { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
            { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
            { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }]))
        } 
    return useState(JSON.parse(localStorage.getItem('elements')))
}

export function ElementsProvider({ children }) {
    const [elements, setElements] = setDefault()

    const printelements = () => {
        console.log('eeeelements ', elements)
    }

    return (
        <ElementsContext.Provider value={elements}>
            <ElementsAddContext value ={printelements}>
                {children}
            </ElementsAddContext>
        </ElementsContext.Provider>
    )
}