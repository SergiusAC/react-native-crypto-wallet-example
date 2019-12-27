import React from 'react';
import { Root } from 'native-base';

export function withNativeBaseRoot(Component) {
  return class extends React.Component {
    render() {
      return (
        <Root><Component {...this.props} /></Root>
      );
    }
  };
}
