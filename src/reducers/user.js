import {
  TOGGLE_TAB, REGISTRATION_USER, LOGIN_USER, OPEN_AUTHORIZATION, LOGOUT_USER
} from '../constants/actionTypes';

const initialState = {
  isAuthorizationOpen: false,
  tab: true,
  registrationError: false,
  logInError: false,
  mail: ''
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TAB:
      return {
        ...state,
        tab: action.payload,
        logInError: false,
        registrationError: false
      };
    case REGISTRATION_USER:
      return {
        ...state,
        registrationError: !state.registrationError
      };
    case LOGIN_USER:
      return {
        ...state,
        logInError: !state.logInError,
        mail: action.payload
      };
    case OPEN_AUTHORIZATION:
      return {
        ...state,
        isAuthorizationOpen: !state.isAuthorizationOpen,
        logInError: false,
        registrationError: false
      };
      case LOGOUT_USER:
      return {
        ...state,
        mail: ''
      };
    default:
      return state;
  }
};

export default user;
