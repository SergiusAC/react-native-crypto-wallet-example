import { ethers } from 'ethers';

export const AQYLDYNET_DEV_JSON_RPC_ADDR = 'http://207.154.196.69:8545';

const jsonRpcProvider = new ethers.providers.JsonRpcProvider(AQYLDYNET_DEV_JSON_RPC_ADDR);

export function getJsonRpcProvider() {
  return jsonRpcProvider;
}

export function getBalance(accountAddress) {
  return jsonRpcProvider.getBalance(accountAddress)
    .then((balance) => {
      return balance;
    })
    .catch((err) => {
      return err;
    });
}

export function getBalanceInEther(accountAddress) {
  return getBalance(accountAddress)
    .then((balance) => {
      return fromWeiToEther(balance);
    })
    .catch((err) => {
      return err;
    });
}

export function fromWeiToEther(value) {
  return ethers.utils.formatEther(value);
}
