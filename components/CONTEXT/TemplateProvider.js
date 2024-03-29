// react/next
import React, {useContext, useState, createContext, useEffect} from 'react'

// context
import { useCySaveLocalStorageContext, useCySetNewCyContext } from './ElementsProvider'

const TemplateContext = createContext()
const TemplateUpdateContext = createContext()
const TemplateGetAllContext = createContext()
const TemplateGetContextContext = createContext()
const TemplateGetStateContext = createContext()
const TemplateGetContextData = createContext() 
const TemplateAddContextData = createContext()

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

export function useTemplateGetContextContext() {
    return useContext(TemplateGetContextContext)
}

export function useTemplateGetContextData() {
    return useContext(TemplateGetContextData)
}

export function useTemplateAddContextData() {
    return useContext(TemplateAddContextData)
}

export function useTemplateGetStateContext() {
    return useContext(TemplateGetStateContext)
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

    const getTemplateContext = (ctx) => {
        let language = navigator.language || navigator.userLanguage
        let locale = 'en-CA'
        // TODO: implement different locales, default to en-CA (or whatever)
        return JSON.parse(template.extraData.context)[locale][ctx]
    }

    const getContextData = (ctx_name, ctx_id) => {
        let language = navigator.language || navigator.userLanguage
        let locale = 'en-CA'
        // TODO: implement different locales, default to en-CA (or whatever)

        let data = JSON.parse(template.extraData.context)[locale][ctx_name][ctx_id]
        return data
    }
    
    const addContextData = (type, data) => {
        console.log('type ', type)
        console.log('data ', data)
        let locale = 'en-CA'

        let temp = JSON.parse(template.extraData.context)

        // if (type === 'text'){
        let newIdx = Object.keys(temp[locale][type]).length
        temp[locale][type][newIdx+1] = data
        // }
        console.log('temp ', temp)
        let newtemp = template
        newtemp.extraData.context = JSON.stringify(temp)
        console.log('new temp ', JSON.parse(newtemp.extraData.context)[locale][type])

        localStorage.setItem('template', JSON.stringify(newtemp))
        setTemplate(newtemp)

    }

    const getStateContext = (state) => {
        let language = navigator.language || navigator.userLanguage
        let locale = 'en-CA'
        // TODO: implement different locales, default to en-CA (or whatever)
        // TODO: deal with other machines and roles
        let role = 'default-role'
        let ctx = template.data.machines[0].states[state].role[role].display.displayData
        return ctx
    }

    return (
        <TemplateContext.Provider value={template}>
            <TemplateUpdateContext.Provider value={updateTemplate}>
                <TemplateGetAllContext.Provider value={getAllTemplates}>
                    <TemplateGetContextContext.Provider value={getTemplateContext}>
                        <TemplateGetStateContext.Provider value={getStateContext}>
                            <TemplateGetContextData.Provider value={getContextData}>
                                <TemplateAddContextData.Provider value={addContextData}>
                                    {children}
                                </TemplateAddContextData.Provider>
                            </TemplateGetContextData.Provider>
                        </TemplateGetStateContext.Provider>
                    </TemplateGetContextContext.Provider>
                </TemplateGetAllContext.Provider>
            </TemplateUpdateContext.Provider>
        </TemplateContext.Provider>
    )
}