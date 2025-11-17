import { useMutation } from "@tanstack/react-query";
import { signIn } from "../api/auth";
import useAuthStore from "../store/useAuthStore";
import type { AxiosResponse } from "axios";

interface LoginData {
  userName: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    userName: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

const useLogin = () => {
  const { setAuth } = useAuthStore();

  return useMutation<AxiosResponse<LoginResponse>, Error, LoginData>({
    mutationFn: signIn,
    onSuccess: (response: AxiosResponse<LoginResponse>) => {
      const token = response.data.access_token;
      const userName = response.data.user.userName;
      setAuth(token, userName);
    },
    onError: (error: Error) => {
      console.error("Login failed:", error);
    },
  });
};

export default useLogin;
