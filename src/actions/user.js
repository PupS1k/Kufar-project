import {
  TOGGLE_TAB,
  CHANGE_USER,
  REGISTRATION_USER,
  TOGGLE_IS_REGISTRATION,
  REGISTRATION_USER_ASYNC,
  LOGIN_USER_ASYNC,
  OPEN_MODEL,
  ADD_USER_PRODUCTS,
  GET_USER_PRODUCTS_ASYNC,
  DELETE_PRODUCT, ADD_USER_PRODUCT, DELETE_USER_PRODUCT, DELETE_USER_PRODUCT_ASYNC
} from '../constants/actionTypes';

const changeUser = (mail, id) => ({
  type: CHANGE_USER,
  mail,
  id
});

const toggleIsOpenModel = () => ({
  type: OPEN_MODEL
});

const toggleTab = value => ({
  type: TOGGLE_TAB,
  payload: value
});

const registrationUser = () => ({
  type: REGISTRATION_USER
});

const registrationUserAsync = (url, data) => ({
  type: REGISTRATION_USER_ASYNC,
  url,
  data
});

const logInUserAsync = (url, data) => ({
  type: LOGIN_USER_ASYNC,
  url,
  data
});

const toggleIsRegistration = () => ({
  type: TOGGLE_IS_REGISTRATION
});

const addUserProducts = value => ({
  type: ADD_USER_PRODUCTS,
  payload: value
});

const deleteUserProduct = value => ({
  type: DELETE_USER_PRODUCT,
  payload: value
});

const deleteUserProductAsync = url => ({
  type: DELETE_USER_PRODUCT_ASYNC,
  url
});

const addUserProduct = value => ({
  type: ADD_USER_PRODUCT,
  payload: value
});


export {
  toggleIsOpenModel,
  toggleTab,
  changeUser,
  registrationUser,
  logInUserAsync,
  registrationUserAsync,
  toggleIsRegistration,
  addUserProducts,
  deleteUserProduct,
  addUserProduct,
  deleteUserProductAsync
};
