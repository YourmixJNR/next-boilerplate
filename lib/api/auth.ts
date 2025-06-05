import apiClient from "./api-client";

type LoginResponse = {
  user: {
    id: string;
    email: string;
    name: string;
    avatar?: string;
  };
  token: string;
};

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await apiClient.post("/auth/login", { email, password });
  return response.data;
};

export const registerUser = async (userData: {
  email: string;
  password: string;
  name: string;
}): Promise<LoginResponse> => {
  const response = await apiClient.post("/auth/register", userData);
  return response.data;
};

export const getCurrentUser = async (): Promise<LoginResponse> => {
  const response = await apiClient.get("/user");
  return response.data;
};
