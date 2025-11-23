import type { User } from "../../types/user/user";
import styled from "@emotion/styled";
import CustomButton from "../shared/CustomButton";
import { useTranslation } from "react-i18next";

const UserList = ({ user }: { user: User }) => {
  const { t } = useTranslation();
  return (
    <div>
      <UserCard>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <UserInfo>
          <div>{user.phone}</div>
          <ButtonContainer>
            <CustomButton
              bg="rgba(255, 255, 255, 0.1)"
              color="#FFFFFF"
              border="#FFFFFF"
            >
              {t("users.info")}
            </CustomButton>
            <CustomButton bg="rgba(255, 255, 255, 0.1)">
              {t("users.posts")}
            </CustomButton>
          </ButtonContainer>
        </UserInfo>
      </UserCard>
      <br />
    </div>
  );
};

export default UserList;

const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
`;

const UserInfo = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;
