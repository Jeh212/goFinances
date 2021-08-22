import React from "react";
import {
  Container,
  Header, Icon, Photo,
  User,
  UserGreetings,
  UserInfo,
  UserName,
  UserWrapper
} from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/29873371?v=4",
              }}
            />

            <User>
              <UserGreetings>Ola,</UserGreetings>
              <UserName>Jean Carlos</UserName>
            </User>
          </UserInfo>
          <Icon name="power"/>
        </UserWrapper>
      </Header>
    </Container>
  );
};

export { Dashboard };
