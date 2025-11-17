import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  userName: string | null;
  setAuth: (token: string | null, userName: string | null) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      userName: null,
      setAuth: (token, userName) => set({ token, userName }),
      logout: () => set({ token: null, userName: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
