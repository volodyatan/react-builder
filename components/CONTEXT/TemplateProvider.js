import { v4 as uuid } from 'uuid';
import React, {useContext, useState, createContext, useEffect} from 'react'

const TemplateContext = createContext()
const TemplateSetContext = createContext()
const TemplateGetAllContext = createContext()

const setDefault = (setTemplate) => {
    if(localStorage.getItem('template') === null){
        localStorage.setItem('template', JSON.stringify({}))
    }
    return setTemplate(JSON.parse(localStorage.getItem('template')))
}

// use this hook to get the template
export function useTemplateContext() {
    return useContext(TemplateContext)
}

export function useTemplateSetContext() {
    return useContext(TemplateSetContext)
}

export function useTemplateGetAllContext() {
    return useContext(TemplateGetAllContext)
}

// creating context and custom hook to deal with elements in multiple components
export function TemplateProvider({ children }) {
    const [template, setTemplate] = useState()

    // initialize elements in local storage, or load elements from local storage if they exist already 
    useEffect(() => {
        setDefault(setTemplate)
    }, []);

    // every time elements gets updated, save to local storage
    useEffect(() => {
        localStorage.getItem('template') !== null && template !== undefined ? localStorage.setItem('template', JSON.stringify(template)) : ''
    }, [template]);

    const getAllTemplates = async () => {  
        let response = await fetch('api/templates/getAllTemplates')
        let jsondata = await response.json()
        return jsondata.data 
    }

    return (
        <TemplateContext.Provider value={template}>
            <TemplateSetContext.Provider value={setTemplate}>
                <TemplateGetAllContext.Provider value={getAllTemplates}>
                    {children}
                </TemplateGetAllContext.Provider>
            </TemplateSetContext.Provider>
        </TemplateContext.Provider>
    )
}