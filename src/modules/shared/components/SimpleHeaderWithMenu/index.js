import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

const SimpleHeaderWithMenu = (props) => {
  return (
    <Header>
      <Left>
        <Button transparent onPress={props.onMenuPress}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>{props.title}</Title>
      </Body>
      <Right />
    </Header>
  );
};

export default SimpleHeaderWithMenu;
