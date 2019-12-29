import * as types from '../types';
import merge from 'lodash/merge';

const initialState = {
  accounts: []
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ACCOUNT: {
      return merge({}, state, {
        accounts: [
          ...state.accounts,
          {
            name: action.payload.name,
            address: action.payload.address,
            mnemonic: action.payload.mnemonic,
            privateKey: action.payload.privateKey
          }
        ]
      });
    }
    
    case types.REMOVE_ACCOUNT: {
      const filtered = state.accounts.filter((_, idx) => idx !== action.payload.idx);
      return {
        ...state,
        accounts: filtered
      };
    }

    default: {
      return state;
    }
  }
};

export default walletReducer;
