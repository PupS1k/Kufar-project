export const ADD_USER_PRODUCT = 'ADD_USER_PRODUCT';
export const TOGGLE_TAB = 'TOGGLE_TAB';
export const REGISTRATION_USER = 'REGISTRATION_USER';
export const REGISTRATION_USER_ASYNC = 'REGISTRATION_USER_ASYNC';
export const LOGIN_USER_ASYNC = 'LOGIN_USER_ASYNC';
export const OPEN_MODEL = 'OPEN_MODEL';
export const CHANGE_USER = 'CHANGE_USER';
export const TOGGLE_IS_REGISTRATION = 'TOGGLE_IS_REGISTRATION';
export const ADD_USER_PRODUCTS = 'ADD_USER_PRODUCTS';
export const DELETE_USER_PRODUCT = 'DELETE_USER_PRODUCT';
export const DELETE_USER_PRODUCT_ASYNC = 'DELETE_USER_PRODUCT_ASYNC';

export const changeUser = (mail, id) => ({
  type: CHANGE_USER,
  mail,
  id
});

export const toggleIsOpenModel = () => ({
  type: OPEN_MODEL
});

export const toggleTab = value => ({
  type: TOGGLE_TAB,
  payload: value
});

export const registrationUser = value => ({
  type: REGISTRATION_USER,
  payload: value
});

export const registrationUserAsync = (url, data) => ({
  type: REGISTRATION_USER_ASYNC,
  url,
  data
});

export const logInUserAsync = (url, data) => ({
  type: LOGIN_USER_ASYNC,
  url,
  data
});

export const toggleIsRegistration = () => ({
  type: TOGGLE_IS_REGISTRATION
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
