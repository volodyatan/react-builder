import React from 'react'
// load data icon
import DownloadingRoundedIcon from '@mui/icons-material/DownloadingRounded';
// save data icon
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
// save data as icon
import SaveAsRoundedIcon from '@mui/icons-material/SaveAsRounded';


const iconStyle = {
    color: 'white'
}

export const SideBarItems = [
    {
        title: "Load Template",
        icon: <DownloadingRoundedIcon sx={iconStyle}/>,
        action: 'load'
    },
    {
        title: "Save Template",
        icon: <SaveRoundedIcon sx={iconStyle}/>,
        action: 'save'
    },
    // {
    //     title: "Save Template As",
    //     icon: <SaveAsRoundedIcon sx={iconStyle}/>,
    //     action: ''
    // }
]
