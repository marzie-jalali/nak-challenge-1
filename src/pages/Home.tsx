import useAuthStore from "../store/useAuthStore";
import useLogout from "../hooks/useLogout";
import styled from "@emotion/styled";
import CustomButton from "../component/shared/CustomButton";

const Home = () => {
  const { userName } = useAuthStore();
  const { logout } = useLogout();

  return (
    <div>
      {userName && (
        <HeadingContainer>
          <h2>Welcome, {userName}! 👋</h2>
          <CustomButton
            bg="#ff4444"
            padding="8px 16px"
            color="white"
            onClick={logout}
          >
            Logout
          </CustomButton>
        </HeadingContainer>
      )}

      <p>To calm down your mind, you can try:</p>
      <ul>
        <li>inhale through your nose for a count of 4</li>
        <li>hold for 7</li>
        <li>exhale through your mouth for 8</li>
      </ul>
    </div>
  );
};

export default Home;

const HeadingContainer = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
