import React from 'react'
import DNDArea from './builder/DNDArea'
import styles from '../styles/Builder.module.css'
import { Tabs, Tab, Card } from '@mui/material';
import { useState, useEffect } from 'react';

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
        newValue === 'other' ? setCurrentlyDisplayed(<p>other</p>) : '';
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Tabs value={currentTab} onChange={handleChange}>
                    <Tab label="Builder" value="builder"/>
                    <Tab label="Other" value="other" />
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