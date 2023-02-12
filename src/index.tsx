import React from 'react';
import ReactDOM from 'react-dom/client';

import { CssBaseline, ThemeProvider } from '@mui/material';

import App from './app';
import { theme } from './theme';
import { AuthenticationContextProvider } from './context/authentication-context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <CssBaseline>
          <App />
        </CssBaseline>
      </AuthenticationContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
