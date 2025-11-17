import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const useLogout = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();

  const logout = () => {
    setAuth(null, null);
    navigate("/sign-in");
  };

  return { logout };
};

export default useLogout;
