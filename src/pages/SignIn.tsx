import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomInput from "../component/shared/CustomInput";
import CustomButton from "../component/shared/CustomButton";
import { FaLongArrowAltRight } from "react-icons/fa";
import useLogin from "../hooks/useLogin";

interface SingInForm {
  userName: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const loginMutation = useLogin();
  const [error, setError] = useState<string>("");

  const { register, handleSubmit } = useForm<SingInForm>({ mode: "onChange" });

  const onSubmit = (data: SingInForm) => {
    setError("");
    loginMutation.mutate(data, {
      onSuccess: () => {
        navigate("/");
      },
      onError: (error: Error) => {
        setError(error.message || "Login failed");
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading>{t("headings.sign_in")}</Heading>
      <CustomInput
        placeholder={t("labels.username")}
        {...register("userName")}
        type="text"
      />
      <CustomInput
        placeholder={t("labels.password")}
        {...register("password")}
        type="password"
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ButtonContainer>
        <CustomButton type="button" onClick={() => navigate("/sign-up")}>
          {t("labels.sign_up_button")}
        </CustomButton>
        <CustomButton
          padding="10px 32px"
          bg="#000000"
          type="submit"
          disabled={loginMutation.isPending}
        >
          <FaLongArrowAltRight color="#ffffff" />
        </CustomButton>
      </ButtonContainer>
    </Form>
  );
};

export default SignIn;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Heading = styled.p`
  font-size: 30px;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 14px;
  margin-top: -8px;
`;
