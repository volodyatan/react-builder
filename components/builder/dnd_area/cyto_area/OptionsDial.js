// react
import React from 'react'

// context
import { useCyActionContext, useCyUndoRedoActionContext } from '../../../CONTEXT/ElementsProvider';

// material ui
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'

// material icons
import UndoRoundedIcon from '@mui/icons-material/UndoRounded';
import RedoRoundedIcon from '@mui/icons-material/RedoRounded';
import CenterFocusStrongRoundedIcon from '@mui/icons-material/CenterFocusStrongRounded';

const OptionsDial = ( { saveIcon, changeSaveIcon, saveCy } ) => {
    const cyUndoRedo = useCyUndoRedoActionContext()
    const cyAction = useCyActionContext()

  return (
    <SpeedDial
        direction='right'
        ariaLabel="Cyto Options"
        sx={{ position: 'absolute', top: 10, left: 10 }}
        icon={<SpeedDialIcon />}
        onOpen={()=> changeSaveIcon('idle')}
    >
        <SpeedDialAction
        key='SaveCyto'
        icon={saveIcon}
        tooltipTitle='Save Cyto'
        onClick={()=> {
            changeSaveIcon('idle')
            saveCy()
            changeSaveIcon('saving')
        }}
        />
        <SpeedDialAction
        key='UndoCyto'
        icon={<UndoRoundedIcon/>}
        tooltipTitle='Undo'
        onClick={()=> {
            console.log('undoing')
            cyUndoRedo('undo')
        }}
        />
        <SpeedDialAction
        key='RedoCyto'
        icon={<RedoRoundedIcon/>}
        tooltipTitle='Redo'
        onClick={()=> {
            console.log('redoing')
            cyUndoRedo('redo')
        }}
        />
        <SpeedDialAction
        key='RedoCyto'
        icon={<CenterFocusStrongRoundedIcon/>}
        tooltipTitle='Re-center'
        onClick={()=> {
            console.log('redoing')
            cyAction('re-center')
        }}
        />
    </SpeedDial>
  )
}

export default OptionsDial