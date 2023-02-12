import React from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useAuthenticationContext } from '../../context/authentication-context';
import { UserSession } from '../../apis/authentication/authentication-api';

export interface NavBarProps {
  title: string;
  userSession?: UserSession;
}

export const NavBar: React.FunctionComponent<NavBarProps> = ({ title, userSession }) => {
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
