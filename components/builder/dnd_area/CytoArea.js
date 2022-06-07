import dynamic from 'next/dynamic';

import { useState } from 'react';
import { Box } from '@mui/material';

const CytoComponent = dynamic(() => import('./cyto_area/CytoComponent'), {
  ssr: false,
});
// import CytoComponent from './cyto_area/CytoComponent';

const CytoArea = ( ) => {

  return (
    <div>
      {/* TODO: dynamically change this box size to match window */}
      <Box
        sx={{
          width: 'fill',
          height: 'auto',
          backgroundColor: '#DCDCDC',
          '&:hover': {
            backgroundColor: 'white',
            // opacity: [0.9, 0.8, 0.7], 
          },
        }}>
        <CytoComponent />
      </Box>
    </div>

  )
}

export default CytoArea