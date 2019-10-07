import {
  TOGGLE_TAB,
  REGISTRATION_USER,
  CHANGE_USER,
  OPEN_MODEL,
  TOGGLE_IS_REGISTRATION,
  ADD_USER_PRODUCTS,
  ADD_USER_PRODUCT, DELETE_USER_PRODUCT
} from '../actions/user';

const initialState = {
  isOpenWindow: false,
  tab: true,
  registrationError: '',
  mail: '',
  id: '',
  isRegistration: false,
  products: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TAB:
      return {
        ...state,
        tab: action.payload,
        registrationError: ''
      };
    case REGISTRATION_USER:
      return {
        ...state,
        registrationError: action.payload
      };
    case CHANGE_USER:
      return {
        ...state,
        mail: action.mail,
        id: action.id
      };
    case OPEN_MODEL:
      return {
        ...state,
        isOpenWindow: !state.isOpenWindow,
        tab: true,
        registrationError: ''
      };
    case TOGGLE_IS_REGISTRATION:
      return {
        ...state,
        isRegistration: !state.isRegistration
      };
    case ADD_USER_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case DELETE_USER_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
    case ADD_USER_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    default:
      return state;
  }
};
