import React from 'react'

// ICONS
// short text icon
import ShortTextRoundedIcon from '@mui/icons-material/ShortTextRounded';
// long text icon
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
// title icon
import TitleRoundedIcon from '@mui/icons-material/TitleRounded';
// header icon
import AbcRoundedIcon from '@mui/icons-material/AbcRounded';

//image icon
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
// video icon
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';

// menu icon
import MenuIcon from '@mui/icons-material/Menu';
// input icon
import InputRoundedIcon from '@mui/icons-material/InputRounded';
// list icon
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// button icon
import SmartButtonRoundedIcon from '@mui/icons-material/SmartButtonRounded';

// COMPONENTS
//text components
import ViewTitle from './ContextDataViews.js/ViewTitle';

// change icon style if needed
const iconStyle = {
    // color: 'black'
}

export const textOptions = [
    {
        title: "Short text",
        icon: <ShortTextRoundedIcon sx={iconStyle}/>,
        component: <></>
    },
    {
        title: "Long text",
        icon: <MenuBookRoundedIcon sx={iconStyle}/>,
        component: <></>
    },
    {
        title: "Title",
        icon: <TitleRoundedIcon sx={iconStyle}/>,
        component: <ViewTitle />
    },
    {
        title: "Header",
        icon: <AbcRoundedIcon sx={iconStyle}/>,
        component: <></>
    }
]

export const mediaOptions = [
    {
        title: "Image",
        icon: <ImageRoundedIcon sx={iconStyle}/>,
        component: <></>
    },
    {
        title: "Video",
        icon: <OndemandVideoRoundedIcon sx={iconStyle}/>,
        component: <></>
    }
]

export const multiOptions = [
    {
        title: "Menu",
        icon: <MenuIcon sx={iconStyle}/>,
        component: <></>
    },
    {
        title: "Input",
        icon: <InputRoundedIcon sx={iconStyle}/>,
        component: <></>
    },
    {
        title: "List",
        icon: <FormatListBulletedIcon sx={iconStyle}/>,
        component: <></>
    },
    {
        title: "Button",
        icon: <SmartButtonRoundedIcon sx={iconStyle}/>,
        component: <></>
    },
]