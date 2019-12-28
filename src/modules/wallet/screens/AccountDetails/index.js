import React, { useState } from 'react';
import {
  Container, View, Text, Content
} from 'native-base';
import { getBalanceInEther } from '../../../../services/ether';

const AccountDetails = (props) => {
  const account = props.navigation.getParam('account', null);
  
  const [balance, setBalance] = useState(null);

  getBalanceInEther(account.address)
    .then((balance) => {
      console.log('OK');
      console.log(balance);
      setBalance(balance);
    })
    .catch(err => {
      console.log('error');
      console.log(err);
    });
  
  console.log(account.address);

  return (
    <Container>
      <Content>
        <View>
          <Text>Имя счета: {account.name}</Text>
          <Text>Адрес: {account.address}</Text>
          <Text>Мнемоника: {account.mnemonic}</Text>
          <Text>Приватный ключ: {account.privateKey}</Text>
        </View>
        <View style={{marginTop: '25%'}}>
          <Text style={{textAlign: 'center'}}>{balance === null ? 'Баланс загружается...' : balance}</Text>
        </View>
      </Content>
    </Container>
  );
};

export default AccountDetails;
