import CytoArea from "./dnd_area/CytoArea";
import CytoSidebar from "./dnd_area/CytoSidebar";
import styles from "../../styles/DNDArea.module.css"
import { useState } from 'react';

import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

const DNDArea = () => {
  // const isBrowser = () => typeof window !== "undefined"
  const [elements, setElements] = useState([
    { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
    { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
    { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
  ]);

  const updateElements = (newNode) => {
    console.log(' new nodes ', newNode)
  }

  return (
    <div>
      <Grid  container spacing={2}>
        <Grid className={styles.grid} item xs={8}>
          {/* {isBrowser() && */}
            <CytoArea elements={elements} />
          {/* } */}
        </Grid>
        {/* TODO: make this pop in and out
         https://mui.com/material-ui/react-speed-dial/
         https://mui.com/material-ui/react-drawer/ (persistent drawer)*/}
        <Grid className={styles.sidepanel} item xs={4}>
          <CytoSidebar elements={elements}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default DNDArea