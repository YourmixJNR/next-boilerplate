import { loginUser, registerUser } from "@/lib/api/auth";
import { useAuthStore } from "@/stores/auth";
import { LoginPayload, RegisterPayload } from "@/types";
import { AxiosError } from "axios";

export const useAuth = () => {
  const { setUser, setLoading, setError, clearErrors, clearAuth } =
    useAuthStore();

  const handleLogin = async (payload: LoginPayload) => {
    try {
      clearErrors();
      setLoading("isLoginLoading", true);

      const { user } = await loginUser(payload);
      setUser(user);

      return { success: true };
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError && error.message
          ? error.message
          : "Login failed";
      setError("loginError", errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading("isLoginLoading", false);
    }
  };

  const handleRegister = async (payload: RegisterPayload) => {
    try {
      clearErrors();
      setLoading("isRegisterLoading", true);

      const { user } = await registerUser(payload);
      setUser(user);

      return { success: true };
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError && error.message
          ? error.message
          : "Registration failed";
      setError("registerError", errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading("isRegisterLoading", false);
    }
  };

  const handleLogout = () => {
    clearAuth();
    // clear persisted data
    localStorage.removeItem("auth-storage");
  };

  return {
    handleLogin,
    handleRegister,
    handleLogout,
  };
};
