import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-native';
import {
  Container, View, Text, Content, Header, Left, 
  Button, Icon, Body, Right, Card, CardItem,
  Item, Input, Label, Spinner
} from 'native-base';
import { removeAccount } from '../../../../state/wallet/actions';
import SimpleHeaderWithMenu from '../../../shared/components/SimpleHeaderWithMenu';
import AccountItem from '../../components/AccountItem';
import AccountAdd from '../AccountAdd';

const AccountList = (props) => {
  const [addAccountVisible, setAddAccountVisible] = useState(false);

  const showAccount = (account) => {
    props.navigation.navigate('AccountDetails', { account });
  };

  const removeAccount = (idx) => {
    props.removeAccount(idx);
  }

  let accounts = null;
  if (typeof(props.wallet.accounts) !== 'undefined') {
    accounts = props.wallet.accounts.map((account) => {
      return <AccountItem key={account.address} account={account} onShowAccount={showAccount} />;
    });
  }

  return (
    <Container>
      <SimpleHeaderWithMenu onMenuPress={props.navigation.openDrawer} title="Счета" />
      <Content>

        <Modal visible={addAccountVisible} animationType="slide" transparent={false}>
          <AccountAdd onClose={() => setAddAccountVisible(false)} />
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
  removeAccount
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);
