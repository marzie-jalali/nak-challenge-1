import type { User } from "../types/user/user";
import UserList from "../component/users/UserList";
import useUserList from "../hooks/useUserList";
import styled from "@emotion/styled";

const Home = () => {
  const { data, isLoading } = useUserList();
  const users = data?.data;

  if (!users || users.length === 0) {
    return (
      <Container>
        <EmptyMessage>No users found</EmptyMessage>
      </Container>
    );
  }

  return (
    <Container>
      <UsersContainer>
        {isLoading ? (
          <LoadingMessage>Loading users...</LoadingMessage>
        ) : (
          users.map((user: User) => <UserList key={user.id} user={user} />)
        )}
      </UsersContainer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 100%;
  max-width: 700px;
`;

const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #00ebcf;
  font-size: 18px;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
`;
