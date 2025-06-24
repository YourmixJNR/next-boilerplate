import axios from "axios";
import { env } from "@/config";
import { getAccessToken } from "../storage/cookies";

/**
 * Axios instance configured with base URL and auth token interceptor.
 * Used for all API requests.
 */

const apiClient = axios.create({
  baseURL: env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(async (config) => {
  const token = await getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add more API client utilities or interceptors below as needed.

export default apiClient;
