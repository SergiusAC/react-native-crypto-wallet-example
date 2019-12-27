import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import AuthLoadingScreen from '@modules/auth/screens/AuthLoading';
import RegisterScreen from '@modules/auth/screens/Register';
import LoginScreen from '@modules/auth/screens/Login';

import WalletNavigator from './WalletNavigation';
import SettingsNavigation from './SettingsNavigation';

const AppNavigator = createDrawerNavigator(
  {
    Wallet: {
      screen: WalletNavigator,
      navigationOptions: {
        title: 'Кошелёк'
      }
    },
    Settings: {
      screen: SettingsNavigation,
      navigationOptions: {
        title: 'Настройки'
      }
    }
  },
  {
    initialRouteName: 'Wallet'
  }
);

const MainNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Register: RegisterScreen,
    Login: LoginScreen,
    App: AppNavigator
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
