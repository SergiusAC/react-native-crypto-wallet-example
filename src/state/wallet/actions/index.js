import * as types from '../types';

export function addAccount(name, address, privateKey, mnemonic) {
  return {
    type: types.ADD_ACCOUNT,
    payload: {
      name,
      address,
      privateKey,
      mnemonic
    }
  };
};
