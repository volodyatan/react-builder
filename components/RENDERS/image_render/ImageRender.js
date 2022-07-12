// react/next
import { useState } from "react"

const ImageRender = ( { image } ) => {

    const [src,] = useState(image.src)
    const [altText,] = useState(image.alt_text)

    return (
        <img src={src} alt={altText} />
    )
}


export default ImageRender