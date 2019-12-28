import * as types from '../types';
import merge from 'lodash/merge';

const initialState = {
  accounts: []
};

const walletReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case types.ADD_ACCOUNT:
      return merge({}, state, {
        accounts: [
          ...state.accounts,
          {
            name: action.payload.name,
            address: action.payload.address,
            privateKey: action.payload.privateKey,
            mnemonic: action.payload.mnemonic
          }
        ]
      });

    default: {
      return state;
    }
  }
};

export default walletReducer;
