import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// types
type User = {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  // add other user fields as needed
};

type AuthError = {
  login: string | null;
  register: string | null;
  logout: string | null;
};

type AuthLoading = {
  login: boolean;
  register: boolean;
  logout: boolean;
};

type AuthState = {
  user: User | null;
  loading: AuthLoading;
  error: AuthError;
  setUser: (user: User | null) => void;
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
        login: false,
        register: false,
        logout: false,
      },
      error: {
        login: null,
        register: null,
        logout: null,
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
          error: { login: null, register: null, logout: null },
        }),
      clearAuth: () =>
        set({
          user: null,
          error: { login: null, register: null, logout: null },
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
