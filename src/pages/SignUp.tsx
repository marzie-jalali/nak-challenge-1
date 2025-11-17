import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import CustomInput from "../component/shared/CustomInput";
import CustomButton from "../component/shared/CustomButton";
import { FaLongArrowAltRight } from "react-icons/fa";
import useSignUp from "../hooks/useSignUp";

interface SingUpForm {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}
const SignUp = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const signUpMutation = useSignUp();
  const { register, handleSubmit } = useForm<SingUpForm>({ mode: "onChange" });

  const onSubmit = (data: SingUpForm) => {
    signUpMutation.mutate(data, {
      onSuccess: () => {
        navigate("/sign-in");
      },
      onError: (error: Error) => {
        console.error("Sign up failed:", error);
      },
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Heading>{t("headings.sign_up")}</Heading>
        <CustomInput
          placeholder={t("labels.first_name")}
          {...register("firstName")}
          type="text"
        />
        <CustomInput
          placeholder={t("labels.last_name")}
          {...register("lastName")}
          type="text"
        />
        <CustomInput
          placeholder={t("labels.user_name")}
          {...register("userName")}
          type="text"
        />
        <CustomInput
          placeholder={t("labels.password")}
          {...register("password")}
          type="password"
        />
        <ButtonContainer>
          <CustomButton
            color="#000000"
            type="button"
            onClick={() => navigate("/sign-in")}
          >
            {t("labels.sign_in_button")}
          </CustomButton>
          <CustomButton color="#000000" type="submit">
            <FaLongArrowAltRight />
          </CustomButton>
        </ButtonContainer>
      </Form>
    </div>
  );
};

export default SignUp;

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
