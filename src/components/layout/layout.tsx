import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container, useTheme } from '@mui/material';

import NavBar from '../navigation/nav-bar';

const Layout: React.FunctionComponent = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar title='Cit' />
      <Container maxWidth={false} sx={{ paddingTop: theme.spacing(3) }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
