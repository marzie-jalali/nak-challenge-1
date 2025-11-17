import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomInput from "../component/shared/CustomInput";
import CustomButton from "../component/shared/CustomButton";
import useLogin from "../hooks/useLogin";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinSchema } from "../types/auth/authSchema";

type SignInForm = yup.InferType<typeof signinSchema>;

const SignIn = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const loginMutation = useLogin();
  const [error, setError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    mode: "onChange",
    resolver: yupResolver(signinSchema),
  });

  const onSubmit = (data: SignInForm) => {
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
        error={errors.userName?.message}
        type="text"
      />
      <CustomInput
        placeholder={t("labels.password")}
        {...register("password")}
        type="password"
        error={errors.password?.message}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ButtonContainer>
        <CustomButton
          bg="rgba(255, 255, 255, 0.1)"
          type="button"
          onClick={() => navigate("/sign-up")}
        >
          {t("labels.sign_up_button")}
        </CustomButton>
        <CustomButton
          // padding="10px 32px"
          color="#000000"
          type="submit"
          disabled={loginMutation.isPending}
        >
          submit
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
  color: #00ebcf;
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
