import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';

import { Grid } from '@mui/material';

import LoginForm from '../../components/forms/login-form';
import { useAuthenticationContext } from '../../context/authentication-context';

const Login: React.FunctionComponent = () => {
  const { authenticationApi, setUserSession } = useAuthenticationContext();
  const navigate = useNavigate();
  const [error, setError] = React.useState<string>();

  const onSubmitLogin = React.useCallback(async (email: string, password: string) => {
    const authenticationResult = await authenticationApi.login(email, password);

    if (authenticationResult.success) {
      setError(undefined);
      setUserSession(authenticationResult.userSession);
      navigate('/');
    } else {
      setError(authenticationResult.reason);
    }
  }, []);

  return (
    <Grid sx={{ paddingTop: 4 }} container justifyContent='center'>
      <Grid item>
        <LoginForm submitLogin={onSubmitLogin} error={error} />
      </Grid>
    </Grid>
  );
};

export default Login;
