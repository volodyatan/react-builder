// react/nextjs
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react'

// custom components
import TextRender from './TextRender';
import ButtonRender from './button_render/ButtonRender';
import InputRender from './input_render/InputRender';
import MenuRender from './menu_render/MenuRender';

const RenderItem = ( {type, num, data} ) => {

    const [renderItem, setRenderItem] = useState(<></>)

    // TODO: make input and menu renders have button to open preview of the render
    useEffect(() => {
        let render = <></>
        if (type === 'text'){
            render = <TextRender text={data.text} variant={data.variant} />
        }else if (type === 'menu'){
            // render = <MenuRender menuItems={data['menu_items']} />
        }else if (type === 'button'){
            render = <ButtonRender button={data} />
        }else if (type === 'input'){
            // render = <InputRender inputs={data} />
        }
        setRenderItem(render)
    }, []);

    return (
        <Box>
            {renderItem}
        </Box>
    )
}

export default RenderItem