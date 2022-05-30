import CytoArea from "./dnd_area/CytoArea";
import DraggableNodes from "./dnd_area/DraggableNodes";

import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

const DNDArea = () => {
  return (
    <div>
      DNDArea
      <CytoArea></CytoArea>
      <DraggableNodes></DraggableNodes>
    </div>
  )
}

export default DNDArea