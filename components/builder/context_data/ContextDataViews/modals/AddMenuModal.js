// react/nextjs
import React, { useState, useEffect } from 'react'

// material ui
import { Button, Box, Typography, TextField, IconButton, MenuItem } from '@mui/material';

// icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// context

const AddMenuModal = ( {close, addContext} ) => {
    const [type, setType] = useState('menu')
    const [menuName, setMenuName] = useState('')
    const [menus, setMenus] = useState([
        {"type": '',
        "label": '',
        "label_text": '',
        "icon": '',
        "data": {}}
    ])

    const updateFormData = (idx, field, value) => {
        let data = [...menus]
        data[idx][field] = value
        setMenus(data)
    }

  return (
    <Box
      component='form' 
      autoComplete='off'
      onSubmit={(e) => {
        e.preventDefault()
        addContext('menu',{
          type: type,
          name: menuName,
          menu_items: menus
        })
        close()
      }}>
        <IconButton onClick={()=> close()} sx={{position:'absolute', right:'2px', top:'2px'}}>
          <CloseRoundedIcon />
        </IconButton>
        <Typography>
          Add new button
        </Typography>

          <TextField id='type' label='Type' value={type} required={true} disabled={true} onChange={(e) => setType(e.target.value)}/>
          <TextField id='name' label='Name' value={menuName} required={true} onChange={(e) => setMenuName(e.target.value)}/>

        {/* TODO: add menu validation */}
        {menus.map((mnu,idx) => {
            return  <Box key={`form-data-${idx}`}>
                        <hr/>
                        <TextField key={`${idx}-type`} id={`${idx}-type`} label='Type' value={mnu.type} required={true} size='small' onChange={(e) => updateFormData(idx,'type',e.target.value)}/>
                        <TextField key={`${idx}-label`} id={`${idx}-label`} label='Label' value={mnu.label} required={true} size='small' onChange={(e) => updateFormData(idx,'label',e.target.value)}/>
                        <TextField key={`${idx}-label-text`} id={`${idx}-label-text`} label='Label Text' value={mnu.label_text} required={true} size='small' onChange={(e) => updateFormData(idx,'label_text',e.target.value)}/>
                        <TextField key={`${idx}-icon`} id={`${idx}-icon`} label='Icon' value={mnu.icon} required={true} size='small' onChange={(e) => updateFormData(idx,'icon',e.target.value)}/>
                        {/* TODO: add extra data */}
                    </Box>

        })}
        {/* TODO: fix overflow issue, adding new menu makes menu items inaccessible, no scroll available */}
        <Button onClick={() => setMenus((prev)=> {
            let data = [...prev]
            data.push({"type": '',
            "label": '',
            "label_text": '',
            "icon": '',
            "data": {}})
            return data
        })}>Add menu item </Button>

          <Button type='submit'>Add</Button>

    </Box>
  )
}

export default AddMenuModal