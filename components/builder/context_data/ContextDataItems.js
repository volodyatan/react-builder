import React from 'react'

// ICONS
// short text icon
import ShortTextRoundedIcon from '@mui/icons-material/ShortTextRounded';

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
// text components
import ViewText from './ContextDataViews/ViewText'
// media components
import ViewImage from './ContextDataViews/ViewImage'
import ViewVideo from './ContextDataViews/ViewVideo'
// other components
import ViewMenu from './ContextDataViews/ViewMenu'
import ViewInput from './ContextDataViews/ViewInput'
import ViewList from './ContextDataViews/ViewList'
import ViewButton from './ContextDataViews/ViewButton';

// change icon style if needed
const iconStyle = {
    // color: 'black'
}

export const textOptions = [
    {
        title: "Text",
        icon: <ShortTextRoundedIcon sx={iconStyle}/>,
        component: <ViewText />
    }
]

export const mediaOptions = [
    {
        title: "Image",
        icon: <ImageRoundedIcon sx={iconStyle}/>,
        component: <ViewImage />
    },
    {
        title: "Video",
        icon: <OndemandVideoRoundedIcon sx={iconStyle}/>,
        component: <ViewVideo />
    }
]

export const multiOptions = [
    {
        title: "Menu",
        icon: <MenuIcon sx={iconStyle}/>,
        component: <ViewMenu />
    },
    {
        title: "Input",
        icon: <InputRoundedIcon sx={iconStyle}/>,
        component: <ViewInput />
    },
    {
        title: "List",
        icon: <FormatListBulletedIcon sx={iconStyle}/>,
        component: <ViewList />
    },
    {
        title: "Button",
        icon: <SmartButtonRoundedIcon sx={iconStyle}/>,
        component: <ViewButton />
    },
]