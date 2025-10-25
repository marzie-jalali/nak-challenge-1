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
  height: 100vh;
  width: 100%;
`;

const Card = styled.div`
  background: white;
  padding: 40px 48px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;
