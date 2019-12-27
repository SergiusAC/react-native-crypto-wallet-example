import React from 'react';
import {Container, View, Text, Content, Header, Left, Button, Icon, Body, Right} from 'native-base';

const AccountList = (props) => {

  const openDrawer = () => {
    props.navigation.openDrawer();
  }

  return (
    <Container>
      <Header style={{backgroundColor: '#3F51B5'}}>
        <Left>
          <Button transparent onPress={openDrawer}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body />
        <Right />
      </Header>
      <Content>
        <Text>Account List</Text>
      </Content>
    </Container>
  );
};

export default AccountList;