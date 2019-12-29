import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

const SimpleHeaderWithArrowBack = (props) => {
  return (
    <Header>
      <Left>
        <Button transparent onPress={() => props.onArrowBackPress()}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>{props.title}</Title>
      </Body>
      <Right />
    </Header>
  );
};

export default SimpleHeaderWithArrowBack;
