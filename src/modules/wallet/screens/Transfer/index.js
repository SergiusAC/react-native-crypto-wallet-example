import React from 'react';
import { connect } from 'react-redux';
import {Container, View, Text, Content, Button} from 'native-base';
import SimpleHeaderWithMenu from '../../../shared/components/SimpleHeaderWithMenu';
import { getJsonRpcProvider } from '../../../../services/ether';
import { ethers } from 'ethers';

const Transfer = (props) => {

  console.log(props.wallet);

  const testTransfer = async () => {
    const fromAccount = props.wallet.accounts[0];
    const toAccount = props.wallet.accounts[1];

    const fromWallet = new ethers.Wallet(fromAccount.privateKey, getJsonRpcProvider());
    console.log(fromWallet);
    fromWallet.sendTransaction({
      to: toAccount.address,
      value: ethers.utils.parseEther('0.5')
    }).then((tx) => {
      console.log(tx);
    });
  };

  return (
    <Container>
      <SimpleHeaderWithMenu onMenuPress={props.navigation.openDrawer} title="Переводы" />
      
      <Content>
        <View style={{padding: 10}}>
          <Button onPress={testTransfer}><Text>Test</Text></Button>
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

export default connect(mapStateToProps, null)(Transfer);
