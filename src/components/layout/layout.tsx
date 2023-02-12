import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Container, useTheme } from '@mui/material';

import { useAuthenticationContext } from '../../context/authentication-context';

import NavBar from '../navigation/nav-bar';

const Layout: React.FunctionComponent = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { userSession, setUserSession } = useAuthenticationContext();

  const onLogin = React.useCallback(() => {
    navigate('/login');
  }, []);

  const onLogout = React.useCallback(() => {
    setUserSession(undefined);
    navigate('/');
  }, []);

  return (
    <>
      <NavBar title='Cit' userSession={userSession} onLogin={onLogin} onLogout={onLogout} />
      <Container maxWidth={false} sx={{ paddingTop: theme.spacing(3) }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
