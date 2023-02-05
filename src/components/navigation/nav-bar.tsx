import React from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useAuthenticationContext } from '../../context/authentication-context';

export interface NavBarProps {
  title: string;
}

export const NavBar: React.FunctionComponent<NavBarProps> = ({ title }) => {
  const { userSession } = useAuthenticationContext();

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h5' noWrap>
          {title}
        </Typography>
        {userSession?.isValid() && <AccountCircleIcon sx={{ marginLeft: 'auto' }} />}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
