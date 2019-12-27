import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountListScreen from '@modules/wallet/screens/AccountList';
import TransferScreen from '@modules/wallet/screens/Transfer';
import HistoryScreen from '@modules/wallet/screens/History';
import { Icon, Text } from 'native-base';

const WalletNavigation = createBottomTabNavigator(
  {
    AccountList: { screen: AccountListScreen },
    Transfer: { screen: TransferScreen },
    History: { screen: HistoryScreen },
  },
  {
    initialRouteName: 'AccountList',
    defaultNavigationOptions: (options) => {
      return {
        tabBarIcon: ({focused}) => {
          const { routeName } = options.navigation.state;
          let iconName = 'wallet';

          if (routeName === 'AccountList') {
            iconName = 'wallet';
          } else if (routeName === 'Transfer') {
            iconName = 'send';
          } else if (routeName === 'History') {
            iconName = 'timer';
          }

          return <Icon name={iconName} style={{color: (focused ? '#3F51B5' : 'black')}} />
        },
        tabBarLabel: () => {
          const { routeName } = options.navigation.state;
          let text = '';
          
          if (routeName === 'AccountList') {
            text = 'accounts';
          } else if (routeName === 'History') {
            text = 'history';
          } else if (routeName === 'Transfer') {
            text = 'transfers';
          }

          return <Text style={{textAlign: 'center'}}>{text}</Text>
        }
      }
    },
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'gray',
    },
  }
);

export default WalletNavigation;