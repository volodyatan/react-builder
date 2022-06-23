import React from 'react'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import UndoRoundedIcon from '@mui/icons-material/UndoRounded';
import RedoRoundedIcon from '@mui/icons-material/RedoRounded';

const OptionsDial = ( { saveIcon, changeSaveIcon, saveCy, cyUndoRedo} ) => {
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
    </SpeedDial>
  )
}

export default OptionsDial