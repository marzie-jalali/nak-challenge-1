import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Container>
      <Card>
        <Outlet />
      </Card>
    </Container>
  );
};

export default AuthLayout;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 40px;
  background: linear-gradient(to right, #000e1a, #0d0014);
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  max-width: 700px;
  width: 100%;
  text-align: center;
`;
