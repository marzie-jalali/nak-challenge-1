import { create } from "zustand";

interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
  userName: string | null;
  setUserName: (userName: string | null) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token"),
  userName: localStorage.getItem("userName"),
  setToken: (token) => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
    set({ token });
  },
  setUserName: (userName) => {
    if (userName) {
      localStorage.setItem("userName", userName);
    } else {
      localStorage.removeItem("userName");
    }
    set({ userName });
  },
}));

export default useAuthStore;
