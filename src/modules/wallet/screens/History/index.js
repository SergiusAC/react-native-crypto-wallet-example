import React from 'react';
import { Container, View, Text, Content } from 'native-base';
import SimpleHeaderWithMenu from '@modules/shared/components/SimpleHeaderWithMenu';

const History = (props) => {

  return (
    <Container>
      <SimpleHeaderWithMenu onMenuPress={props.navigation.openDrawer} title="История" />
      <Content>
        <Text>History</Text>
      </Content>
    </Container>
  );
};

export default History;
