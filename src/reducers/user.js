import {
  TOGGLE_TAB,
  LOG_OUT,
  SIGN_IN_LOADING,
  SIGN_IN_ERROR,
  SIGN_UP_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_UP_LOADING,
  SIGN_UP_SUCCESS,
  TOGGLE_IS_REGISTRATION,
  ADD_USER_PRODUCTS,
  ADD_USER_PRODUCT,
  DELETE_USER_PRODUCT
} from '../actions/user';

const initialState = {
  tab: true,
  isRegistration: false,
  id: '',
  mail: '',
  products: [],
  signInError: '',
  signUpError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_OUT:
      return {
        ...state,
        id: '',
        mail: '',
        products: [],
      };
    case SIGN_IN_LOADING:
      return {
        ...state,
        signInError: '',
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        mail: action.mail,
        id: action.id,
        signInError: '',
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        signInError: action.payload,
      };
    case SIGN_UP_LOADING:
      return {
        ...state,
        signInError: '',
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        mail: action.mail,
        id: action.id,
        signUpError: '',
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: action.payload,
      };
    case TOGGLE_TAB:
      return {
        ...state,
        tab: action.payload,
        signUpError: '',
        signInError: ''
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
