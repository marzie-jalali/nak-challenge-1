import { useQuery } from "@tanstack/react-query";
import { listUsers } from "../api/api";
import type { User } from "../types/user/user";
import type { AxiosResponse } from "axios";

const useUserList = () => {
  return useQuery<AxiosResponse<User[]>>({
    queryKey: ["users"],
    queryFn: listUsers,
  });
};

export default useUserList;
