import dynamic from 'next/dynamic';

import { useState } from 'react';
import { Box } from '@mui/material';

const CytoComponent = dynamic(() => import('./cyto_area/CytoComponent'), {
  ssr: false,
});
// import CytoComponent from './cyto_area/CytoComponent';

const CytoArea = ( {elements} ) => {

  return (
    <div>
      <Box
        sx={{
          width: 'fill',
          height: 'auto',
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7], 
          },
        }}>
        <CytoComponent />
      </Box>
    </div>

  )
}

export default CytoArea