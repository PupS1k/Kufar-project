import {
  TOGGLE_TAB, REGISTRATION_USER, CHANGE_USER,
  OPEN_MODEL, TOGGLE_IS_REGISTRATION, GET_USER_PRODUCTS
} from '../constants/actionTypes';

const initialState = {
  isOpenWindow: false,
  tab: true,
  registrationError: false,
  mail: '',
  isRegistration: false,
  userProducts: []
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
    case OPEN_MODEL:
      return {
        ...state,
        isOpenWindow: !state.isOpenWindow,
        registrationError: false
      };
    case TOGGLE_IS_REGISTRATION:
      return {
        ...state,
        isRegistration: !state.isRegistration
      };
    case GET_USER_PRODUCTS:
      return {
        ...state,
        userProducts: action.payload
      };
    default:
      return state;
  }
};

export default user;
