import React, { Component } from "react";

import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Text
} from "native-base";

export default class Rides extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>Rides</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button active>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
