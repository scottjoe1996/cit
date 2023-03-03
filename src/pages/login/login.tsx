import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';

import { Grid } from '@mui/material';

import LoginForm from '../../components/forms/login-form';
import { useAuthenticationContext } from '../../context/authentication-context';

const Login: React.FunctionComponent = () => {
  const { authenticationApi, setUserSession } = useAuthenticationContext();
  const navigate = useNavigate();

  const onSubmitLogin = React.useCallback(async (email: string, password: string) => {
    console.log(email);

    const authenticationResult = await authenticationApi.login(email, password);
    console.log(authenticationResult);

    if (authenticationResult.success) {
      console.log(authenticationResult);
      setUserSession(authenticationResult.userSession);
      navigate('/');
    } else {
      console.log(`TODO: handle ${authenticationResult.reason}`);
    }
  }, []);

  return (
    <Grid sx={{ paddingTop: 4 }} container justifyContent='center'>
      <Grid item>
        <LoginForm submitLogin={onSubmitLogin} />
      </Grid>
    </Grid>
  );
};

export default Login;
