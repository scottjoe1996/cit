import React from 'react';

import { AppBar, Grid, Toolbar, Typography } from '@mui/material';

export interface NavBarProps {
  title: string;
}

export const NavBar: React.FunctionComponent<NavBarProps> = ({ title }) => {
  return (
    <AppBar position='sticky'>
      <Toolbar sx={{ width: 'min-content' }}>
        <Typography variant='h5' noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
