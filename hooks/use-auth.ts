import { loginUser, registerUser } from "@/lib/api/auth";
import { useAuthStore } from "@/stores/auth";
import { AxiosError } from "axios";

export const useAuth = () => {
  const { setUser, setLoading, setError, clearErrors, clearAuth } =
    useAuthStore();

  const handleLogin = async (email: string, password: string) => {
    try {
      clearErrors();
      setLoading("isLoginLoading", true);

      const { user } = await loginUser(email, password);
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

  const handleRegister = async (userData: {
    email: string;
    password: string;
    name: string;
  }) => {
    try {
      clearErrors();
      setLoading("isRegisterLoading", true);

      const { user } = await registerUser(userData);
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
