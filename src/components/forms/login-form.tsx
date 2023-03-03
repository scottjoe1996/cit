import React from 'react';
import emailValidator from 'email-validator';
import passwordValidator from 'password-validator';

import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { Field, hasError, NO_ERROR } from './shared/field';

interface LoginFormProps {
  submitLogin: (email: string, password: string) => Promise<void>;
}

const LoginForm: React.FunctionComponent<LoginFormProps> = ({ submitLogin }) => {
  const [emailField, setEmailField] = React.useState<Field>({ value: '', error: NO_ERROR });
  const [passwordField, setPasswordField] = React.useState<Field>({ value: '', error: NO_ERROR });
  const [loading, setLoading] = React.useState(false);

  const handleEmailChange = React.useCallback((event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailField({ value: event.currentTarget.value, error: getEmailError(event.currentTarget.value) });
  }, []);

  const handlePasswordChange = React.useCallback((event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPasswordField({ value: event.currentTarget.value, error: getPasswordError(event.currentTarget.value) });
  }, []);

  const handleSubmit = React.useCallback((email: string, password: string) => {
    setLoading(true);
    void submitLogin(email, password).then(() => setLoading(false));
  }, []);

  const emailHasError = hasError(emailField.error);
  const passwordHasError = hasError(passwordField.error);
  const cantContinue = emailHasError || passwordHasError || emailField.value === '' || passwordField.value === '';

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
          error={emailHasError}
          disabled={loading}
        />
        <TextField
          fullWidth
          label='Password'
          placeholder='Password'
          value={passwordField.value}
          helperText={passwordField.error}
          onChange={handlePasswordChange}
          error={passwordHasError}
          type='password'
          disabled={loading}
        />
      </CardContent>
      <CardActions sx={{ padding: 2 }}>
        <LoadingButton
          sx={{ marginLeft: 'auto' }}
          loading={loading}
          onClick={() => handleSubmit(emailField.value, passwordField.value)}
          disabled={cantContinue}
          variant='contained'
        >
          Submit
        </LoadingButton>
      </CardActions>
    </Card>
  );
};

const getEmailError = (email: string) => (emailValidator.validate(email) ? NO_ERROR : 'Invalid email address');

const schema = new passwordValidator();
schema.is().min(6).has().uppercase(1).has().lowercase(1).has().digits(1).has().not().spaces();

const getPasswordError = (password: string) => {
  const validationResult = schema.validate(password, { details: true });

  // Will always be an array
  if (validationResult instanceof Array) {
    return validationResult.length === 0 ? NO_ERROR : validationResult[0].message;
  }
};

export default LoginForm;
