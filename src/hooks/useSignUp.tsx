import { toast } from "react-toastify";
import { signup } from "../api/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success("Sign up successful");
      navigate("/sign-in");
    },
    onError: () => {
      toast.error("Sign up failed");
    },
  });
};

export default useSignUp;
