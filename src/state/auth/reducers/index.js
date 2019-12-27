import * as types from '../types';
import merge from 'lodash/merge';


const initialState = {
  isRegistered: false,
  isLoggedIn: false,
  profile: {
    fullName: '',
    password: ''
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER: {
      return merge({}, state, {
        isLoggedIn: true,
        isRegistered: true,
        profile: {
          fullName: action.payload.fullName,
          password: action.payload.password
        }
      })
    }

    case types.SET_FULL_NAME: {
      return merge({}, state, {
        profile: {
          ...state.profile,
          fullName: action.payload.fullName,
        }
      });
    }

    case types.SET_PASSWORD: {
      return merge({}, state, {
        profile: {
          ...state.profile,
          password: action.payload.password
        }
      });
    }
    
    case types.LOGIN: {
      return merge({}, state, {
        isLoggedIn: true
      });
    }
    
    case types.LOGOUT: {
      return merge({}, state, {
        isLoggedIn: false
      });
    }
    
    default: {
      return state;
    }
  }
};

export default authReducer;
