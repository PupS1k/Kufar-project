import {
  TOGGLE_TAB, REGISTRATION_USER, CHANGE_USER, OPEN_AUTHORIZATION, TOGGLE_IS_REGISTRATION
} from '../constants/actionTypes';

const initialState = {
  isAuthorizationOpen: false,
  tab: true,
  registrationError: false,
  mail: '',
  isRegistration: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TAB:
      return {
        ...state,
        tab: action.payload,
        registrationError: false
      };
    case REGISTRATION_USER:
      return {
        ...state,
        registrationError: !state.registrationError
      };
    case CHANGE_USER:
      return {
        ...state,
        mail: action.payload
      };
    case OPEN_AUTHORIZATION:
      return {
        ...state,
        isAuthorizationOpen: !state.isAuthorizationOpen,
        registrationError: false
      };
    case TOGGLE_IS_REGISTRATION:
      return {
        ...state,
        isRegistration: !state.isRegistration
      };
    default:
      return state;
  }
};

export default user;