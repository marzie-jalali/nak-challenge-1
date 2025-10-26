import { api } from "./clients";

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
