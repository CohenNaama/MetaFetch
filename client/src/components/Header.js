import React from 'react';
import { Box } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ bgcolor: '#263b89', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src={`${process.env.PUBLIC_URL}/MetaData.png`}
        alt="MetaFetch Logo"
        style={{ width: '350px', height: 'auto' }}
      />
    </Box>
  );
};

export default Header;
