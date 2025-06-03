import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// types
type IUser = {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  // add other user fields as needed
};

type AuthError = {
  loginError: string | null;
  registerError: string | null;
  logoutError: string | null;
};

type AuthLoading = {
  isLoginLoading: boolean;
  isRegisterLoading: boolean;
  isLogoutLoading: boolean;
};

type AuthState = {
  user: IUser | null;
  loading: AuthLoading;
  error: AuthError;
  setUser: (user: IUser | null) => void;
  setLoading: (key: keyof AuthLoading, value: boolean) => void;
  setError: (key: keyof AuthError, message: string | null) => void;
  clearErrors: () => void;
  clearAuth: () => void;
};

// store
export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      user: null,
      loading: {
        isLoginLoading: false,
        isRegisterLoading: false,
        isLogoutLoading: false,
      },
      error: {
        loginError: null,
        registerError: null,
        logoutError: null,
      },
      setUser: (user) => set({ user }),
      setLoading: (key, value) =>
        set((state) => ({
          loading: { ...state.loading, [key]: value },
        })),
      setError: (key, message) =>
        set((state) => ({
          error: { ...state.error, [key]: message },
        })),
      clearErrors: () =>
        set({
          error: { loginError: null, registerError: null, logoutError: null },
        }),
      clearAuth: () =>
        set({
          user: null,
          error: { loginError: null, registerError: null, logoutError: null },
        }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      // only persist the user
      partialize: (state) => ({ user: state.user } as AuthState),
    }
  )
);

// selectors
export const useCurrentUser = () => useAuthStore((state) => state.user);
export const useAuthLoading = () => useAuthStore((state) => state.loading);
export const useAuthError = () => useAuthStore((state) => state.error);
