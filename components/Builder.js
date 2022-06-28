// react/next
import React from 'react'
import { useState, useEffect } from 'react';
import styles from '../styles/Builder.module.css'

// material ui
import { Tabs, Tab } from '@mui/material';

// custom components
import DNDArea from './builder/DNDArea'
import ContextDataView from './builder/context_data/ContextDataView';
import TemplateModal from './nav/modals/TemplateModal';


const Builder = () => {
    const [currentlyDisplayed, setCurrentlyDisplayed] = useState(<DNDArea/>);
    const [currentTab, setCurrentTab] = useState('builder');
    const [dndstyle, setDndstyle] = useState({visiblity: 'visible'})
    const [otherstyle, setOtherStyle] = useState({visiblity: 'hidden'})

    const [modalMode, setModalMode] = useState('load')
    const [loadTemplate, setLoadTemplate] = useState(<TemplateModal  modalMode={modalMode} setModalMode={setModalMode}/>)

    useEffect(() => {
        if (modalMode === false){
            setLoadTemplate(<></>)
        }
    }, [modalMode]);

    const handleChange = (event, newValue) => {
        console.log(' new val' ,newValue);
        setCurrentTab(newValue);
        newValue === 'builder' ? setCurrentlyDisplayed(<DNDArea/>) : '';
        newValue === 'context_data' ? setCurrentlyDisplayed(<ContextDataView />) : '';
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Tabs value={currentTab} onChange={handleChange}>
                    <Tab label="Builder" value="builder"/>
                    <Tab label="Context Data" value="context_data" />
                </Tabs>
                {currentlyDisplayed}
                {/* <div style={dndstyle}>
                    <DNDArea />
                </div>
                <div style={otherstyle}>
                    <Card>other</Card>
                </div> */}


            </main>
            {loadTemplate}
        </div>
    )
}

export default Builder