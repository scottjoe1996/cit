import React from 'react';

import { Card, CardContent, CardHeader, TextField } from '@mui/material';

import { Field, hasError, NO_ERROR } from './shared/field';

interface LoginFormProps {}

const LoginForm: React.FunctionComponent<LoginFormProps> = () => {
  const [emailField, setEmailField] = React.useState<Field>({ value: '', error: NO_ERROR });

  const handleEmailChange = React.useCallback((event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailField({ value: event.currentTarget.value, error: NO_ERROR });
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
      </CardContent>
    </Card>
  );
};

export default LoginForm;
