import React from 'react';
import { View, Text, Card, CardItem, Body } from 'native-base';

const AccountItem = (props) => {
  return (
    <CardItem key={props.account.address} bordered button onPress={() => props.onShowAccount(props.account)}>
      <Body>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 2}}>
            <Text>Имя: {props.account.name}</Text>
            <Text>Адрес: {props.account.address.substr(0, 14)}...</Text>
          </View>
        </View>
      </Body>
    </CardItem>
  );
};

export default AccountItem;
