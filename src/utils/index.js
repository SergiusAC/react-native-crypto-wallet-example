import { Toast } from 'native-base';

export function successToast(message) {
  Toast.show({
    text: message,
    buttonText: 'OK',
    duration: 5000,
    type: 'success'
  })
};

export function warningToast(message) {
  Toast.show({
    text: message,
    buttonText: 'OK',
    duration: 5000,
    type: 'warning'
  })
};

export function errorToast(message) {
  Toast.show({
    text: message,
    buttonText: 'OK',
    duration: 5000,
    type: 'danger'
  })
};
