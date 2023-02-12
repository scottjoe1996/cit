import React from 'react';
import LoginForm from './components/forms/login-form';

import { useAuthenticationContext } from './context/authentication-context';

export const App: React.FunctionComponent = () => {
  const { authenticationApi, setUserSession } = useAuthenticationContext();

  const handleSubmit = React.useCallback(async (email: string, password: string) => {
    const result = await authenticationApi.login(email, password);
    if (result.success) {
      setUserSession(result.userSession);
    }
  }, []);

  return (
    <div>
      <h1>Cit App</h1>
      <LoginForm submitLogin={(email, password) => handleSubmit(email, password)} />
    </div>
  );
};

export default App;
