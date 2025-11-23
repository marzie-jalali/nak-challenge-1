import { api } from "./axiosClient";
import { usersApi } from "./axiosClient";

export const signIn = (data: { userName: string; password: string }) => {
  return api.post("/auth/login", data);
};

export const signup = (data: {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}) => {
  return api.post("/users/register", data);
};

export const listUsers = () => {
  return usersApi.get("/users");
};
