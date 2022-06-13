import React from 'react'
// load data
import DownloadingRoundedIcon from '@mui/icons-material/DownloadingRounded';
// save data
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
// save data as 
import SaveAsRoundedIcon from '@mui/icons-material/SaveAsRounded';

const iconStyle = {
    color: 'white'
}

export const SideBarItems = [
    {
        title: "Load Template",
        icon: <DownloadingRoundedIcon sx={iconStyle}/>,
        action: ''
    },
    {
        title: "Save Template",
        icon: <SaveRoundedIcon sx={iconStyle}/>,
        action: ''
    },
    {
        title: "Save Template As",
        icon: <SaveAsRoundedIcon sx={iconStyle}/>,
        action: ''
    }
]
