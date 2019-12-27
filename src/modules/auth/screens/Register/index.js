import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Text, View, Content, Form, Item, Input, Label, Button } from 'native-base';
import { register, logout } from '@state/auth/actions';
import * as ethers from 'ethers';

const Register = (props) => {

  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const _fullnameNotBlank = () => {
    return fullName.trim() !== '';
  }

  const _passwordStrongEnough = () => {
    return password.length >= 8;
  }

  const _passwordConfirmed = () => {
    return password.trim() === passwordConfirm.trim();
  }

  const onRegister = () => {
    if (!_fullnameNotBlank()) {
      alert('Full name must not be empty');
      return;
    }
    if (!_passwordConfirmed()) {
      alert('Password repeated incorrectly');
      return;
    }
    if (!_passwordStrongEnough()) {
      alert('Password length must be 8 or more');
      return;
    }
    const hashPass = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(password));
    props.register(fullName, hashPass);
    props.navigation.navigate('Wallet');
  }

  const checkStorage = () => {
    console.log(props.auth);
    props.logout();
  }

  return (
    <Container>
      <Content>
        <View style={{marginTop: '10%'}}>
          <Text style={{fontSize: 30, textAlign: 'center'}}>AQYLDY Coin Market</Text>
        </View>
        
        <View>
          <Form style={{padding: '5%'}}>
            <Item floatingLabel>
              <Label>Full Name</Label>
              <Input value={fullName} autoCapitalize="words" onChangeText={setFullName} />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input value={password} onChangeText={setPassword} secureTextEntry={true} autoCapitalize="none" />
            </Item>
            <Item secureTextEntry={true} floatingLabel>
              <Label>Password Confirmation</Label>
              <Input value={passwordConfirm} onChangeText={setPasswordConfirm} secureTextEntry={true} autoCapitalize="none" />
            </Item>

            <View style={{marginTop: '5%'}}>
              <Button onPress={onRegister} block><Text>Register</Text></Button>
            </View>
            <View style={{marginTop: '5%'}}>
              <Button onPress={checkStorage} block><Text>Check Storage</Text></Button>
            </View>
          </Form>
        </View>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps =  {
  register,
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
