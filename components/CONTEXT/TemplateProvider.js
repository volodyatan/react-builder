// react/next
import React, {useContext, useState, createContext, useEffect} from 'react'

// context
import { useCySaveLocalStorageContext, useCySetNewCyContext } from './ElementsProvider'

const TemplateContext = createContext()
const TemplateUpdateContext = createContext()
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

export function useTemplateUpdateContext() {
    return useContext(TemplateUpdateContext)
}

export function useTemplateGetAllContext() {
    return useContext(TemplateGetAllContext)
}

// creating context and custom hook to deal with elements in multiple components
export function TemplateProvider({ children }) {
    const [template, setTemplate] = useState()
    const [contextData, setContextData] = useState()

    const setCy = useCySetNewCyContext()
    const saveCy = useCySaveLocalStorageContext()

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

    const updateTemplate = (newTemplate) => {
        setTemplate(newTemplate)
        let extraData = newTemplate.extraData
        let builderData = JSON.parse(extraData.builder)
        setCy(builderData)
        saveCy()
    }

    return (
        <TemplateContext.Provider value={template}>
            <TemplateUpdateContext.Provider value={updateTemplate}>
                <TemplateGetAllContext.Provider value={getAllTemplates}>
                    {children}
                </TemplateGetAllContext.Provider>
            </TemplateUpdateContext.Provider>
        </TemplateContext.Provider>
    )
}