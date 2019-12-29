import React, { useState } from 'react';
import {
  Container, View, Text, Content
} from 'native-base';
import { getBalanceInEther } from '../../../../services/ether';
import SimpleHeaderWithArrowBack from '@modules/shared/components/SimpleHeaderWithArrowBack';

const AccountDetails = (props) => {
  const account = props.navigation.getParam('account', null);
  
  const [balance, setBalance] = useState(null);

  getBalanceInEther(account.address)
    .then((balance) => {
      setBalance(balance);
    })
    .catch(err => {
      console.log(err);
    });
  
  console.log(account.address);

  return (
    <Container>
      <SimpleHeaderWithArrowBack onArrowBackPress={props.navigation.goBack} title="Детали счёта" />
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
