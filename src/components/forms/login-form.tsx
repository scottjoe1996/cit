import React from 'react';
import validator from 'email-validator';

import { Card, CardContent, CardHeader, TextField } from '@mui/material';

import { Field, hasError, NO_ERROR } from './shared/field';

interface LoginFormProps {}

const LoginForm: React.FunctionComponent<LoginFormProps> = () => {
  const [emailField, setEmailField] = React.useState<Field>({ value: '', error: NO_ERROR });
  const [password, setPassword] = React.useState<Field>({ value: '', error: NO_ERROR });

  const handleEmailChange = React.useCallback((event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailField({ value: event.currentTarget.value, error: getEmailError(event.currentTarget.value) });
  }, []);

  const handlePasswordChange = React.useCallback((event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword({ value: event.currentTarget.value, error: NO_ERROR });
  }, []);

  return (
    <Card>
      <CardHeader title='Login' />
      <CardContent>
        <TextField
          fullWidth
          label='Email'
          placeholder='Email'
          value={emailField.value}
          helperText={emailField.error}
          onChange={handleEmailChange}
          error={hasError(emailField.error)}
        />
        <TextField
          fullWidth
          label='Password'
          placeholder='Password'
          value={password.value}
          helperText={password.error}
          onChange={handlePasswordChange}
          error={hasError(password.error)}
          type='password'
        />
      </CardContent>
    </Card>
  );
};

const getEmailError = (email: string) => (validator.validate(email) ? NO_ERROR : 'Invalid email address');

export default LoginForm;
