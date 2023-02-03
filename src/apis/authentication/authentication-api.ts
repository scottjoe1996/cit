export type LoginResult = { success: true } | { success: false; reason: string };

export interface AuthenticationApi {
  login: (email: string, password: string) => Promise<LoginResult>;
}
