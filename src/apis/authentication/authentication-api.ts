export interface UserSession {
  isValid: () => boolean;
}

export type LoginResult = { success: true; userSession: UserSession } | { success: false; reason: string };

export interface AuthenticationApi {
  login: (email: string, password: string) => Promise<LoginResult>;
}
