import { RegisterPayload, AuthResponse, LoginPayload } from "@/types";
import apiClient from "./api-client";

/**
 * Sends a login request to the API.
 * @param payload - Login credentials.
 * @returns AuthResponse containing user and token.
 */
export const loginUser = async (
  payload: LoginPayload
): Promise<AuthResponse> => {
  const response = await apiClient.post("/auth/login", payload);
  return response.data;
};

/**
 * Sends a registration request to the API.
 * @param payload - Registration details.
 * @returns AuthResponse containing user and token.
 */
export const registerUser = async (
  payload: RegisterPayload
): Promise<AuthResponse> => {
  const response = await apiClient.post("/auth/register", payload);
  return response.data;
};

/**
 * Fetches the currently authenticated user from the API.
 * @returns IUser object for the current user.
 */
export const getCurrentUser = async (): Promise<IUser> => {
  const response = await apiClient.get("/user");
  return response.data;
};

// Add more authentication-related API utilities
