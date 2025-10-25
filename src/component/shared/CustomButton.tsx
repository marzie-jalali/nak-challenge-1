import styled from "@emotion/styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  bg?: string;
  color?: string;
  padding?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  type,
  bg,
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
      padding={padding}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

const Button = styled.button<{ bg?: string; color?: string; padding?: string }>`
  padding: ${({ padding }) => padding || "10px"};
  border: 1px solid #000000;
  border-radius: 50px;
  background-color: ${({ bg }) => bg || "#ffffff"};
  color: ${({ color }) => color || "#000000"};
`;
