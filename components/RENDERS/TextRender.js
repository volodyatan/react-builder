// react
import React from 'react'

// material ui
import Typography from '@mui/material/Typography';

// variants: 	
//   'body1'
// | 'body2'
// | 'button'
// | 'caption'
// | 'h1'
// | 'h2'
// | 'h3'
// | 'h4'
// | 'h5'
// | 'h6'
// | 'inherit'
// | 'overline'
// | 'subtitle1'
// | 'subtitle2'
// https://mui.com/material-ui/api/typography/

const TextRender = ( { text, variant } ) => {
  return (
    <Typography variant={variant} >{text}</Typography>
  )
}

export default TextRender