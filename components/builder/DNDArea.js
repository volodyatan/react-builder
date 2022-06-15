import CytoArea from "./dnd_area/CytoArea";
import CytoSidebar from "./dnd_area/CytoSidebar";
import styles from "../../styles/DNDArea.module.css"

import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

const DNDArea = () => {
  // const isBrowser = () => typeof window !== "undefined"

  return (
    <div>
        {/* <Grid  container spacing={2}>
          <Grid className={styles.grid} item xs={8}>
              <CytoArea />
          </Grid>
          
          <Grid className={styles.sidepanel} item xs={4}>
            <CytoSidebar />
          </Grid>
        </Grid> */}
        <CytoArea />
      
    </div>
  )
}
{/* TODO: make this pop in and out
          https://mui.com/material-ui/react-speed-dial/
          https://mui.com/material-ui/react-drawer/ (persistent drawer)*/}
export default DNDArea