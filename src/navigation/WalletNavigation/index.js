import React from 'react';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import AccountDetailsScreen from '@modules/wallet/screens/AccountDetails';
import AccountListScreen from '@modules/wallet/screens/AccountList';

import TransferScreen from '@modules/wallet/screens/Transfer';

import HistoryScreen from '@modules/wallet/screens/History';

import { Icon, Text } from 'native-base';


const AccountsNavigation = createStackNavigator(
  {
    AccountList: AccountListScreen,
    AccountDetails: AccountDetailsScreen
  },
  {
    initialRouteName: 'AccountList',
    headerMode: 'none'
  }
);

const WalletNavigation = createBottomTabNavigator(
  {
    Accounts: { 
      screen: AccountsNavigation,
      navigationOptions: {
        title: 'Счета'
      } 
    },
    Transfer: { 
      screen: TransferScreen,
      navigationOptions: {
        title: 'Переводы'
      } 
    },
    History: { 
      screen: HistoryScreen,
      navigationOptions: {
        title: 'История'
      } 
    },
  },
  {
    initialRouteName: 'Accounts',
    defaultNavigationOptions: (options) => {
      return {
        tabBarIcon: ({focused}) => {
          const { routeName } = options.navigation.state;
          let iconName = 'wallet';

          if (routeName === 'Accounts') {
            iconName = 'wallet';
          } else if (routeName === 'Transfer') {
            iconName = 'send';
          } else if (routeName === 'History') {
            iconName = 'timer';
          }

          return <Icon name={iconName} style={{color: (focused ? '#3F51B5' : 'black')}} />
        }
      }
    },
    tabBarOptions: {
      activeTintColor: '#3F51B5',
      inactiveTintColor: 'gray',
    },
  }
);

export default WalletNavigation;
