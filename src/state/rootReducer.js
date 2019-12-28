import { combineReducers } from 'redux';
import authReducer from './auth/reducers';
import walletReducer from './wallet/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  wallet: walletReducer,
});

export default rootReducer;
