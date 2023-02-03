import React from 'react';
import LoginForm from './components/forms/login-form';

export const App: React.FunctionComponent = () => {
  return (
    <div>
      <h1>Cit App</h1>
      <LoginForm submitLogin={() => Promise.resolve()} />
    </div>
  );
};

export default App;
