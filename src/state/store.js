import * as SecureStore from 'expo-secure-store'
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './rootReducer';

class CustomSecureStorage {

  static replaceCharacter = '_';
  
  static _replace(key) {
    return key.replace(/[^a-zA-Z0-9\.\-\_]/, this.replaceCharacter);
  }

  static getItem(key, ...options) {
    return SecureStore.getItemAsync(this._replace(key), ...options);
  }

  static setItem(key, value, ...options) {
    return SecureStore.setItemAsync(this._replace(key), value, ...options);
  }

  static removeItem(key, ...options) {
    return SecureStore.deleteItemAsync(this._replace(key), ...options);
  }
}

const persistConfig = {
  key: 'root',
  storage: CustomSecureStorage,
  whitelist: [
    'auth', 'wallet'
  ],
  blacklist: [
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer
);

let persistor = persistStore(store);

export {
  store,
  persistor,
};
