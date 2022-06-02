import { useState, useEffect } from "react";

const setDefault = () => {
    if(localStorage.getItem('elements') === null){
        localStorage.setItem('elements', JSON.stringify([
            { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
            { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
            { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }]))
        } 
    return useState(JSON.parse(localStorage.getItem('elements')))
}

export default function useElements() {
    const [elements, useElements] = setDefault()

    useEffect(() => {
        console.log('elements changing, ' , elements)
    }, [elements]);


    return [elements, useElements]
}