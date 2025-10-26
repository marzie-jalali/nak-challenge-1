import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const useLogout = () => {
  const navigate = useNavigate();
  const { setToken, setUserName } = useAuthStore();

  const logout = () => {
    setToken(null);
    setUserName(null);
    navigate("/sign-in");
  };

  return { logout };
};

export default useLogout;
