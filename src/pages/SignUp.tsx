import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import CustomInput from "../component/shared/CustomInput";
import CustomButton from "../component/shared/CustomButton";
import { FaLongArrowAltRight } from "react-icons/fa";
import useSignUp from "../hooks/useSignUp";
import { signupSchema } from "../features/auth/validation/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type SignUpForm = yup.InferType<typeof signupSchema>;

const SignUp = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const signUpMutation = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    mode: "onChange",
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data: SignUpForm) => {
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
          error={errors.firstName?.message}
        />
        <CustomInput
          placeholder={t("labels.last_name")}
          {...register("lastName")}
          type="text"
          error={errors.lastName?.message}
        />
        <CustomInput
          placeholder={t("labels.user_name")}
          {...register("userName")}
          type="text"
          error={errors.userName?.message}
        />
        <CustomInput
          placeholder={t("labels.password")}
          {...register("password")}
          type="password"
          error={errors.password?.message}
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
