import * as types from '../types';

export const register = (fullName, password) => {
  return {
    type: types.REGISTER,
    payload: {
      fullName,
      password
    }
  };
};

export const login = (password) => {
  return {
    type: types.REGISTER,
    payload: {
      password
    }
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};

export const setIsFirstLogin = (isFirstLogin) => {
  return {
    type: types.SET_IS_FIRST_LOGIN,
    payload: {
      isFirstLogin
    }
  };
};

export const setIsLoggedIn = (isLoggedIn) => {
  return {
    type: types.SET_IS_LOGGED_IN,
    payload: {
      isLoggedIn
    }
  };
};

export const setFullName = (fullName) => {
  return {
    type: types.SET_FULL_NAME,
    payload: {
      fullName
    }
  };
};

export const setPassword = (password) => {
  return {
    type: types.SET_PASSWORD,
    payload: {
      password
    }
  };
};
