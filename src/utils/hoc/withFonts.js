import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export function withFonts(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isReady: false
      };
    }

    async componentDidMount() {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      this.setState({ isReady: true });
    }
    
    render() {
      return this.state.isReady ? <Component {...this.props} /> : <AppLoading />
    }
  };
}