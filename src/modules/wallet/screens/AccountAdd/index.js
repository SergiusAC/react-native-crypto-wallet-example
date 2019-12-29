import React from 'react';
import { connect } from 'react-redux';
import {
  View, Item, Label, Text, Button, Spinner, Input
} from 'native-base';
import { getRandomBytesAsync } from 'expo-random';
import { ethers } from 'ethers';
import { addAccount } from '../../../../state/wallet/actions';
import { errorToast, successToast } from '@utils';

const AccountAdd = (props) => {

  const [accountName, setAccountName] = React.useState('');
  const [accountCreating, setAccountCreating] = React.useState(false);

  const addAccount = async () => {
    if (accountName.trim().length < 3) {
      errorToast('Имя должно содержать не меньше трёх символов');
    } else {
      setAccountCreating(true)
      
      const randomBytes = await getRandomBytesAsync(16)
      const mnemonic = ethers.utils.HDNode.entropyToMnemonic(randomBytes);
      const wallet = ethers.Wallet.fromMnemonic(mnemonic);
      props.addAccount(accountName.trim(), wallet.address, wallet.mnemonic, wallet.privateKey);
      
      successToast('Счёт успешно создан');
      
      setAccountCreating(false);
    }
    props.onClose();
  };

  return (
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
        <Button onPress={() => props.onClose()} bordered block danger><Text>Закрыть</Text></Button>
      </View>
    </View>
  );
};

const mapDispatchToProps = {
  addAccount
};

export default connect(null, mapDispatchToProps)(AccountAdd);
