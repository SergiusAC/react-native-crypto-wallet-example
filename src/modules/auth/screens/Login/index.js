import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, View, Text, Form, Button, Label, Input, Content, Item } from 'native-base';
import * as ethers from 'ethers';
import { login, register } from '@state/auth/actions';

const Login = (props) => {

  const [password, setPassword] = useState('');

  const onLogin = () => {
    const { keccak256, toUtf8Bytes } = ethers.utils;

    if (keccak256(toUtf8Bytes(password)) === props.password) {
      props.login();
      props.navigation.navigate('App');
    } else {
      alert('Wrong password!');
    }

    console.log(props.auth);
  };

  return (
    <Container>
      <Content>
        <View style={{marginTop: '30%'}}>
          <View style={{ }}>
            <Text style={{ textAlign: 'center' }}>LOGIN TO</Text>
            <Text style={{ textAlign: 'center', fontSize: 30 }}>AQYLDY</Text>
          </View>

          <View>
            <Form style={{ padding: '5%' }}>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input value={password} onChangeText={setPassword} secureTextEntry={true} autoCapitalize="none" />
              </Item>
              <View style={{ marginTop: '8%' }}>
                <Button onPress={onLogin} block rounded><Text>Login</Text></Button>
              </View>
            </Form>
          </View>
        </View>
      </Content>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    password: state.auth.profile.password
  };
};

const mapDispatchToProps = {
  login, register
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
