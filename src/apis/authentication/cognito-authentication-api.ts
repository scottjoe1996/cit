import { CognitoUser, CognitoUserPool, AuthenticationDetails } from 'amazon-cognito-identity-js';

import { AuthenticationApi, LoginResult } from './authentication-api';

export class CognitoAuthenticationApi implements AuthenticationApi {
  constructor(private userPool: CognitoUserPool) {}

  public login(email: string, password: string): Promise<LoginResult> {
    const user = new CognitoUser({ Username: email, Pool: this.userPool });
    const authDetails = new AuthenticationDetails({ Username: email, Password: password });

    return new Promise((resolve, reject) => {
      user.authenticateUser(authDetails, {
        onSuccess: () => {
          resolve({ success: true });
        },
        onFailure: (err: Error) => {
          reject({ success: false, reason: err.message });
        }
      });
    });
  }
}
