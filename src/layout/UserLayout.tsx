import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default UserLayout;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 40px;
  background: linear-gradient(to right, #000e1a, #0d0014);
  width: 100%;
`;
