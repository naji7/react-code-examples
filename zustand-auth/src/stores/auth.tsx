import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AUTH_STORAGE } from "@/constant";

type User = {
  id: number;
  email: string;
  username: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  hasHydrated: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
  setHydrated: (value: boolean) => void;
};

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      hasHydrated: false,
      login: (token, user) => set({ token, user, isAuthenticated: true }),
      logout: () => set({ user: null, token: null, isAuthenticated: false }),
      setHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: AUTH_STORAGE,
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);
