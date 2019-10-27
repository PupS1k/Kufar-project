export const ADD_USER_PRODUCT = 'ADD_USER_PRODUCT';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
export const SIGN_UP_ERROR_CLEAR = 'SIGN_UP_ERROR_CLEAR';
export const SIGN_UP_LOADING = 'SIGN_UP_LOADING';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_IN = 'SIGN_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const SIGN_IN_ERROR_CLEAR = 'SIGN_IN_ERROR_CLEAR';
export const SIGN_IN_LOADING = 'SIGN_IN_LOADING';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const ADD_USER_PRODUCTS = 'ADD_USER_PRODUCTS';
export const DELETE_USER_PRODUCT = 'DELETE_USER_PRODUCT';
export const DELETE_USER_PRODUCT_ASYNC = 'DELETE_USER_PRODUCT_ASYNC';

export const logOut = () => ({
  type: LOG_OUT
});
export const signInErrorClear = () => ({
  type: SIGN_IN_ERROR_CLEAR
});
export const signUpErrorClear = () => ({
  type: SIGN_UP_ERROR_CLEAR
});
export const signIn = (value, handleModalClose) => ({
  type: SIGN_IN,
  payload: value,
  handleModalClose
});
export const signInError = value => ({
  type: SIGN_IN_ERROR,
  payload: value
});
export const signInLoading = () => ({
  type: SIGN_IN_LOADING
});
export const signInSuccess = (mail, id) => ({
  type: SIGN_IN_SUCCESS,
  id,
  mail
});
export const signUp = (value, handleModalClose) => ({
  type: SIGN_UP,
  payload: value,
  handleModalClose
});
export const signUpError = value => ({
  type: SIGN_UP_ERROR,
  payload: value
});

export const signUpLoading = () => ({
  type: SIGN_UP_LOADING
});

export const signUpSuccess = (mail, id) => ({
  type: SIGN_UP_SUCCESS,
  id,
  mail
});
export const addUserProducts = value => ({
  type: ADD_USER_PRODUCTS,
  payload: value
});
export const deleteUserProduct = value => ({
  type: DELETE_USER_PRODUCT,
  payload: value
});
export const deleteUserProductAsync = url => ({
  type: DELETE_USER_PRODUCT_ASYNC,
  url
});
export const addUserProduct = value => ({
  type: ADD_USER_PRODUCT,
  payload: value
});
