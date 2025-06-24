import { loginUser, registerUser, getCurrentUser } from "@/lib/api/auth";
import { LoginPayload, RegisterPayload } from "@/types";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import useSWR from "swr";
import {
  setAuthTokens,
  removeAuthTokens,
  getAccessToken,
} from "@/lib/storage/cookies";

/**
 * Custom hook to fetch the current authenticated user.
 * Uses SWR for caching and revalidation.
 */
export const useCurrentUser = () => {
  const token = getAccessToken();

  const {
    data: user,
    error,
    isLoading,
  } = useSWR(token ? "current-user" : null, getCurrentUser, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });

  return {
    user,
    error: error?.message || null,
    isLoading,
    isAuthenticated: !!user && !error,
  };
};

/**
 * Custom hook to handle user login.
 * Provides loading and error state, and redirects on success.
 */
export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { mutate } = useSWR("current-user");
  const router = useRouter();

  const login = async (payload: LoginPayload) => {
    try {
      setIsLoading(true);
      setError(null);

      const { user, accessToken, refreshToken } = await loginUser(payload);

      // show success toast
      toast.success("Signed in successfully");

      // set auth tokens
      setAuthTokens(accessToken, refreshToken);

      // update cache and revalidate
      mutate(user, false);

      // check for returnTo parameter and redirect accordingly
      const params = new URLSearchParams(window.location.search);
      const returnTo = params.get("returnTo");
      router.push(returnTo || "/");
      return { success: true };
    } catch (err) {
      if (err instanceof AxiosError) {
        const { response } = err;
        const errorMessage = response?.data?.error || "Sign in failed";
        toast.error(errorMessage);
        setError(errorMessage);
        return { success: false, error: errorMessage };
      } else {
        toast.error("An error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};

/**
 * Custom hook to handle user registration.
 * Provides loading and error state, and redirects on success.
 */
export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { mutate } = useSWR("current-user");
  const router = useRouter();

  const register = async (payload: RegisterPayload) => {
    try {
      setIsLoading(true);
      setError(null);

      const { user, accessToken, refreshToken } = await registerUser(payload);

      // show success toast
      toast.success("Signed up successfully");

      // set auth tokens
      setAuthTokens(accessToken, refreshToken);

      // update cache without revalidation
      mutate(user, false);

      // check for returnTo parameter and redirect accordingly
      const params = new URLSearchParams(window.location.search);
      const returnTo = params.get("returnTo");
      router.push(returnTo || "/");
      return { success: true };
    } catch (err) {
      if (err instanceof AxiosError) {
        const { response } = err;
        const errorMessage = response?.data?.error || "Sign up failed";
        toast.error(errorMessage);
        setError(errorMessage);
        return { success: false, error: errorMessage };
      } else {
        toast.error("An error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
};

/**
 * Custom hook to handle user logout.
 * Clears authentication tokens and user cache.
 */
export const useLogout = () => {
  const { mutate } = useSWR("current-user");

  const logout = () => {
    removeAuthTokens();

    // clear user cache
    mutate(null, false);
  };

  return { logout };
};

// Add more authentication-related hooks below
