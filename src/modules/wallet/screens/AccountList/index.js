import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-native';
import {
  Container, View, Text, Content, Header, Left, 
  Button, Icon, Body, Right, Card, CardItem,
  Item, Input, Label, Spinner
} from 'native-base';
import { getRandomBytesAsync } from 'expo-random';
import * as ethers from 'ethers';
import { addAccount } from '../../../../state/wallet/actions';
import { errorToast, successToast } from '../../../../utils';
import { getJsonRpcProvider, getBalanceInEther, getBalance } from '../../../../services/ether';

const AccountList = (props) => {
  const [addAccountVisible, setAddAccountVisible] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [accountCreating, setAccountCreating] = useState(false);

  const openDrawer = () => {
    props.navigation.openDrawer();
  }

  const addAccount = () => {
    if (accountName.trim().length < 3) {
      errorToast('Имя должно содержать не меньше трёх символов');
      setAddAccountVisible(false);
    } else {
      setAccountCreating(true)
      
      getRandomBytesAsync(16).then((randomBytes) => {
        const mnemonic = ethers.utils.HDNode.entropyToMnemonic(randomBytes);
        const wallet = ethers.Wallet.fromMnemonic(mnemonic);
        props.addAccount(accountName.trim(), wallet.address, wallet.privateKey, wallet.mnemonic);
        
        successToast('Счёт успешно создан');
        
        setAccountCreating(false);
        setAddAccountVisible(false);
      });
    }
  }

  const showAccount = (account) => {
    console.log(account);
    props.navigation.navigate('AccountDetails', { account });
  };

  const accounts = props.wallet.accounts.map((account) => {
    return (
      <CardItem key={account.address}>
        <Body>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 2}}>
              <Text>Имя: {account.name}</Text>
              <Text>Адрес: {account.address.substr(0, 14) + '...'}</Text>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'center'}}>
              <View>
                <Button onPress={() => showAccount(account)} small><Text style={{fontSize: 10}}>Посмотреть</Text></Button>
              </View>
            </View>
          </View>
        </Body>
      </CardItem>
    );
  });

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
        <Modal
          visible={addAccountVisible}
          animationType="slide"
          transparent={false}
        >
          <View style={{padding: '5%', height: '100%', justifyContent: 'center'}}>
            <Item floatingLabel>
              <Label><Text>Имя счета</Text></Label>
              <Input value={accountName} onChangeText={setAccountName} />
            </Item>
            <View style={{marginTop: '5%'}}>
              <Button onPress={addAccount} block>
                { accountCreating ? <Spinner color="#fff" /> : <Text>Добавить</Text> }
              </Button>
            </View>
            <View style={{marginTop: '5%'}}>
              <Button onPress={() => setAddAccountVisible(false)} bordered block danger><Text>Закрыть</Text></Button>
            </View>
          </View>
        </Modal>

        <View style={{padding: '2.5%'}}>
          <Card>
            <CardItem header bordered>
              <Text>Счета</Text>
            </CardItem>

            {accounts}

            <CardItem footer button onPress={() => setAddAccountVisible(true)}>
              <Text style={{color: 'red'}}>Добавить счет</Text>
            </CardItem>
            {/* <CardItem footer button onPress={() => console.log(props.wallet)}>
              <Text style={{color: 'blue'}}>Добавить счет</Text>
            </CardItem> */}
          </Card>
        </View>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    wallet: state.wallet
  };
};

const mapDispatchToProps = {
  addAccount
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);
