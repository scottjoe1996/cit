import React from 'react';

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';

import { UserSession } from '../../apis/authentication/authentication-api';

export interface NavBarProps {
  title: string;
  userSession?: UserSession;
  onLogin: () => void;
  onLogout: () => void;
}

export const NavBar: React.FunctionComponent<NavBarProps> = ({ title, userSession, onLogin, onLogout }) => {
  const buttonSpacing = { marginLeft: 'auto' };

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h5' noWrap>
          {title}
        </Typography>
        {userSession ? (
          <IconButton sx={buttonSpacing} onClick={onLogout}>
            <AccountCircleIcon />
          </IconButton>
        ) : (
          <IconButton sx={buttonSpacing} onClick={onLogin}>
            <LoginIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
