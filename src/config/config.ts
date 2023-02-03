import { CognitoUserPool } from 'amazon-cognito-identity-js';

interface Config {
  cognitoUserPool: CognitoUserPool;
}

export const CONFIG: Config = { cognitoUserPool: new CognitoUserPool({ UserPoolId: 'eu-west-2_foPgmMeXN', ClientId: '2pc8kngik0fb1sr79b6g6nn8e8' }) };
