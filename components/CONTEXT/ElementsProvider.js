import React, {useContext, useState, createContext, useEffect} from 'react'

const ElementsContext = createContext()
const ElementsAddContext = createContext()

export function useElementsContext() {
    return useContext(ElementsContext)
}

export function useElementsAddContext() {
    return useContext(ElementsAddContext)
}

const setDefault = (setElements) => {
    if(localStorage.getItem('elements') === null){
        localStorage.setItem('elements', JSON.stringify([
            { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
            { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
            { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }]))
        } 
    return setElements(JSON.parse(localStorage.getItem('elements')))
}

export function ElementsProvider({ children }) {
    const [elements, setElements] = useState()

    useEffect(() => {
        setDefault(setElements)
    }, []);

    const printelements = () => {
        console.log('eeeelements ', elements)
    }

    return (
        <ElementsContext.Provider value={elements}>
            <ElementsAddContext.Provider value ={printelements}>
                {children}
            </ElementsAddContext.Provider>
        </ElementsContext.Provider>
    )
}