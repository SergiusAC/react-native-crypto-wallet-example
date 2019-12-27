import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from '../../state/store';

export function withPersistStore(Component) {
  return class extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...this.props} />
          </PersistGate>
        </Provider>
      );
    }
  };
}