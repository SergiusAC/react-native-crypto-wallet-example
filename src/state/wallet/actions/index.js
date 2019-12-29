import * as types from '../types';

export function addAccount(name, address, mnemonic, privateKey) {
  return {
    type: types.ADD_ACCOUNT,
    payload: {
      name,
      address,
      mnemonic,
      privateKey
    }
  };
}

export function removeAccount(idx) {
  return {
    type: types.REMOVE_ACCOUNT,
    payload: {
      idx
    }
  };
}
