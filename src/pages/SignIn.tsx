import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { useState } from "react";
import CustomInput from "../component/shared/CustomInput";
import CustomButton from "../component/shared/CustomButton";
import { FaLongArrowAltRight } from "react-icons/fa";

interface SingInForm {
  username: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setToken } = useAuthStore();
  const [error, setError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SingInForm>({ mode: "onchange" });

  const onSubmit = (data: SingInForm) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading>{t("headings.sign_in")}</Heading>
      <CustomInput
        placeholder={t("labels.username")}
        {...register("username")}
        type="text"
      />
      <CustomInput
        placeholder={t("labels.password")}
        {...register("password")}
        type="password"
      />
      <ButtonContainer>
        <CustomButton type="submit" onClick={() => navigate("/sign-up")}>
          {t("labels.sign_up_button")}
        </CustomButton>
        <CustomButton
          padding="10px 32px"
          bg="#000000"
          type="button"
          onClick={() => navigate("/")}
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
