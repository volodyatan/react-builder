// react
import React, { useState } from 'react'

// material ui
import Button from '@mui/material/Button'


// Variants: contained, outlined, text
// Colors: inherit, primary, secondary, success, error, info, warning
// Size: small, medium, large

const ButtonRender = ( { button } ) => {

    const [variant,] = useState(button.variant)
    const [color,] = useState(button.color)
    const [size,] = useState(button.size)
    const [text,] = useState(button.text)

  return (
    <Button variant={variant} color={color} size={size}>
        {text}
    </Button>
  )
}

export default ButtonRender