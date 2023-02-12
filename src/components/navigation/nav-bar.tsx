import React from 'react';

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';

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
        <IconButton sx={{ marginLeft: 'auto' }}>{userSession ? <AccountCircleIcon /> : <LoginIcon />}</IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
