import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container, useTheme } from '@mui/material';

import { useAuthenticationContext } from '../../context/authentication-context';

import NavBar from '../navigation/nav-bar';

const Layout: React.FunctionComponent = () => {
  const theme = useTheme();
  const { userSession } = useAuthenticationContext();

  return (
    <>
      <NavBar title='Cit' userSession={userSession} />
      <Container maxWidth={false} sx={{ paddingTop: theme.spacing(3) }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
