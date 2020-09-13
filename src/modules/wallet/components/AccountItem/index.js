import React from 'react';
import { View, Text, Card, CardItem, Body, Spinner } from 'native-base';
import { getBalanceInEther } from '../../../../services/ether';

const AccountItem = (props) => {

  const [balance, setBalance] = React.useState(null);

  getBalanceInEther(props.account.address)
    .then(res => {
      setBalance(res);
    })
    .catch(err => {
      console.log(err);
    });

  const spinnerElement = <Spinner size="small" style={{height: 'auto'}} />;
  const balanceElement = <Text>{balance} ETH</Text>

  const amount =  balance === null ? spinnerElement : balanceElement;

  return (
    <CardItem key={props.account.address} bordered button onPress={() => props.onShowAccount(props.account)}>
      <Body>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 2}}>
            <Text>Имя: {props.account.name}</Text>
            <Text>Адрес: {props.account.address.substr(0, 14)}...</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            {amount}
          </View>
        </View>
      </Body>
    </CardItem>
  );
};

export default AccountItem;
