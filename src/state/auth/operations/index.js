import { store } from '../../store';
import * as ethers from 'ethers'; 

export function verifyPassword(passwordToCheck) {
  const { auth: { profile: { password } } } = store.getState();

  if (encryptPassword(passwordToCheck) === password) {
    return true;
  } else {
    return false;
  }
}

export function encryptPassword(password) {
  return ethers.utils.keccak256(ethers.utils.toUtf8Bytes(password));
}
