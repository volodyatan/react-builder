// react/nextjs
import React from 'react'
import { useState } from 'react';

// material ui
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

// custom componenets
import RenderAccordion from './RenderAccordion';
import ContextModalBase from './modals/ContextModalBase';
import ContextHeader from './ContextHeader';

const ContextBody = ( {type, context} ) => {

    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        setModalOpen(true)
    }

    return (
        <Box>
            <ContextHeader type={type} openModal={openModal} />
            <RenderAccordion type={type} contextData={context} />
            <ContextModalBase modalMode={type} modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </Box>
    )
}

export default ContextBody