import React from 'react';
import { AuthenticationApi, UserSession } from '../apis/authentication/authentication-api';
import { CognitoAuthenticationApi } from '../apis/authentication/cognito-authentication-api';
import { CONFIG } from '../config/config';

interface AuthenticationContextInt {
  authenticationApi: AuthenticationApi;
  userSession?: UserSession;
  setUserSession: (userSession: UserSession) => void;
}

const AuthenticationContext = React.createContext<AuthenticationContextInt | undefined>(undefined);

export const AuthenticationContextProvider: React.FunctionComponent<{ children: React.ReactElement }> = ({ children }) => {
  const [userSession, setUserSession] = React.useState<UserSession>();
  const authenticationApi = new CognitoAuthenticationApi(CONFIG.cognitoUserPool);

  return <AuthenticationContext.Provider value={{ authenticationApi, userSession, setUserSession }}>{children}</AuthenticationContext.Provider>;
};

export const useAuthenticationContext = (): AuthenticationContextInt => {
  const context = React.useContext(AuthenticationContext);
  if (context === undefined) {
    throw new Error('useAuthenticationContext must be within AuthenticationContextProvider');
  }

  return context;
};
