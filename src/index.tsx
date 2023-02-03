import React from 'react';
import ReactDOM from 'react-dom/client';

import { Container, CssBaseline, ThemeProvider } from '@mui/material';

import App from './app';
import NavBar from './components/navigation/nav-bar';
import { theme } from './theme';
import { AuthenticationContextProvider } from './context/authentication-context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <CssBaseline>
          <NavBar title='Cit' />
          <Container maxWidth='md' sx={{ paddingTop: theme.spacing(3) }}>
            <App />
          </Container>
        </CssBaseline>
      </AuthenticationContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
