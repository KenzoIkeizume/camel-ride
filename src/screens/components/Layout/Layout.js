import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import Profile from "../../Profile/Profile";

export default class Layout extends Component {
  render() {
    return (
      <Container style={{ marginTop: Expo.Constants.statusBarHeight }}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Profile />
      </Container>
    );
  }
}
