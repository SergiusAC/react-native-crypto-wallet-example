import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal, Alert } from 'react-native';
import { 
  Container, Header, Left, Body, View,  Content, Text, 
  List, ListItem, Button, Icon, Title, Right, Separator,
  Label, Item, Toast, Input
} from 'native-base';
import { setFullName, setPassword, logout } from '../../../../state/auth/actions';
import { verifyPassword, encryptPassword } from '@state/auth/operations';
import { errorToast, successToast } from '@utils';

const Settings = (props) => {

  console.log(props.profile);

  const [fullNameVisible, setFullNameVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newFullName, setNewFullName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setnewPasswordConfirm] = useState('');

  const openDrawer = () => {
    props.navigation.openDrawer();
  };

  const changeFullName = () => {
    if (newFullName.trim().length > 3) {
      props.setFullName(newFullName.trim());
      successToast('Имя успешно изменено');
    } else {
      errorToast('Имя должо быть не меньше трёх символов')
    }
    setFullNameVisible(false);
  };

  const changePassword = () => {
    if (!verifyPassword(oldPassword)) {
      errorToast('Неправильный старый пароль');
    } 
    else if (newPassword.length < 8) {
      errorToast('Новый пароль должен быть не меньше 8 символов')
    } 
    else if (newPassword !== newPasswordConfirm) {
      errorToast('Вы неправильно повторили пароль');
    } 
    else {
      props.setPassword(encryptPassword(newPassword));
      setOldPassword('');
      setNewPassword('');
      setnewPasswordConfirm('');
      successToast('Пароль успешно изменен');
    }
    setPasswordVisible(false);
  };

  const onLogout = () => {
    Alert.alert(
      'Выход', 
      'Вы уверены что хотите выйти?',
      [
        {
          text: 'Да',
          onPress: () => {
            props.logout();
            props.navigation.navigate('Login');
          }
        },
        {
          text: 'Нет',
          onPress: () => {},
          style: 'cancel'
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <Container>
      <Header>
        <Left>
          <Button onPress={openDrawer} transparent>
            <Icon name="menu"></Icon>
          </Button>
        </Left>
        <Body><Title>Настройки</Title></Body>
        <Right />
      </Header>
      <Content>

        {/* Change Full Name */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={fullNameVisible}
          >
          <View style={{padding: '5%', height: '100%', justifyContent: 'center'}}>
            <View>
              <Item floatingLabel>
                <Label><Text>Новое имя</Text></Label>
                <Input value={newFullName} onChangeText={setNewFullName} autoCapitalize="words" />
              </Item>
            </View>
            <View style={{marginTop: '5%'}}>
              <Button onPress={changeFullName} block><Text>Изменить</Text></Button>
            </View>
            <View style={{marginTop: '5%'}}>
              <Button onPress={() => setFullNameVisible(false)} bordered block danger><Text>Закрыть</Text></Button>
            </View>
          </View>
        </Modal>

        {/* Change Password */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={passwordVisible}
          >
          <View style={{padding: '5%', height: '100%', justifyContent: 'center'}}>
            <View>
              <Item floatingLabel>
                <Label><Text>Введите старый пароль</Text></Label>
                <Input value={oldPassword} onChangeText={setOldPassword} secureTextEntry={true} autoCapitalize="none" />
              </Item>
              <Item style={{marginTop: '2%'}} floatingLabel>
                <Label><Text>Новый пароль</Text></Label>
                <Input value={newPassword} onChangeText={setNewPassword} secureTextEntry={true} autoCapitalize="none" />
              </Item>
              <Item style={{marginTop: '2%'}} floatingLabel>
                <Label><Text>Повторите новый пароль</Text></Label>
                <Input value={newPasswordConfirm} onChangeText={setnewPasswordConfirm} secureTextEntry={true} autoCapitalize="none" />
              </Item>
            </View>

            <View style={{marginTop: '5%'}}>
              <Button onPress={changePassword} block><Text>Изменить</Text></Button>
            </View>
            <View style={{marginTop: '5%'}}>
              <Button onPress={() => setPasswordVisible(false)} bordered block danger><Text>Закрыть</Text></Button>
            </View>
          </View>
        </Modal>

        {/* Settings List */}
        <View>
          <View style={{padding: '2.5%'}}><Text>Полное имя: {props.profile.fullName}</Text></View>
          <View>
            <List>
              <Separator bordered><Text>ПРОФИЛЬ</Text></Separator>
              <ListItem onPress={() => setFullNameVisible(true)}>
                <Left>
                  <Text>Изменить полное имя</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem onPress={() => setPasswordVisible(true)}>
                <Left>
                  <Text>Изменить пароль</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

              <ListItem>
                <Body>
                  <Button small onPress={onLogout} danger block bordered>
                    <Text>Выйти</Text>
                  </Button>
                </Body>
              </ListItem>
            </List>
          </View>
        </View>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.auth.profile
  };
};

const mapDispatchToProps = {
  setFullName, setPassword, logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
