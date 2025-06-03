import { loginUser, registerUser } from "@/lib/api/auth";
import { useAuthStore } from "@/stores/auth";
import { AxiosError } from "axios";

export const useAuth = () => {
  const { setUser, setLoading, setError, clearErrors, clearAuth } =
    useAuthStore();

  const handleLogin = async (email: string, password: string) => {
    try {
      clearErrors();
      setLoading("login", true);

      const { user } = await loginUser(email, password);
      setUser(user);

      return { success: true };
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError && error.message
          ? error.message
          : "Login failed";
      setError("login", errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading("login", false);
    }
  };

  const handleRegister = async (userData: {
    email: string;
    password: string;
    name: string;
  }) => {
    try {
      clearErrors();
      setLoading("register", true);

      const { user } = await registerUser(userData);
      setUser(user);

      return { success: true };
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError && error.message
          ? error.message
          : "Registration failed";
      setError("register", errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading("register", false);
    }
  };

  const handleLogout = () => {
    clearAuth();
    localStorage.removeItem("auth-storage"); // clear persisted data
  };

  return {
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
  };
};
