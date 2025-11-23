import styled from "@emotion/styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  bg?: string;
  color?: string;
  border?: string;
  padding?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  type,
  bg,
  border,
  color,
  padding,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      type={type}
      bg={bg}
      color={color}
      border={border}
      padding={padding}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

const Button = styled.button<{
  bg?: string;
  color?: string;
  padding?: string;
  border?: string;
}>`
  padding: ${({ padding }) => padding || "10px 20px"};
  border: 1px solid ${({ border }) => border || "#00ebcf"};
  border-radius: 10px;
  background-color: ${({ bg }) => bg || "#00EBCF"};
  color: ${({ color }) => color || "#00EBCF"};
`;
