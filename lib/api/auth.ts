import { RegisterPayload, AuthResponse, LoginPayload } from "@/types";
import apiClient from "./api-client";

export const loginUser = async (
  payload: LoginPayload
): Promise<AuthResponse> => {
  const response = await apiClient.post("/auth/login", payload);
  return response.data;
};

export const registerUser = async (
  payload: RegisterPayload
): Promise<AuthResponse> => {
  const response = await apiClient.post("/auth/register", payload);
  return response.data;
};

export const getCurrentUser = async (): Promise<IUser> => {
  const response = await apiClient.get("/user");
  return response.data;
};
