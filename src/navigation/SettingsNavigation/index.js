import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon, Text, Title } from 'native-base';
import SettingsScreen from '@modules/settings/screens/Settings';

const SettingsNavigation = createStackNavigator(
  {
    Settings: { 
      screen: SettingsScreen,
      navigationOptions: () => {
        return {
          headerShown: false
        }
      },
    },
  },
  {
    initialRouteName: 'Settings',
  }
);

export default SettingsNavigation;
