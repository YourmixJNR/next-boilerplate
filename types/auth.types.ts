export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface RegisterPayload {
  email: string;
  password: string;
  name: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
