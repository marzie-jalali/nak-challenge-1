import styled from "@emotion/styled";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  error?: string;
  type?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  error,
  type,
  ...props
}) => {
  return (
    <>
      <Input placeholder={placeholder} error={error} type={type} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default CustomInput;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 50px;
`;
const ErrorMessage = styled.p`
  color: #dc362e;
  font-size: 12px;
  margin-top: 4px;
`;
