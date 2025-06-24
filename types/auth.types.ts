// Represents the response returned after authentication
export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

// Payload required for user registration
export interface RegisterPayload {
  email: string;
  password: string;
  name: string;
}

// Payload required for user login
export interface LoginPayload {
  email: string;
  password: string;
}
