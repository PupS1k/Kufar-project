import {
  TOGGLE_TAB, LOGIN_USER, REGISTRATION_USER, LOGOUT_USER,
  REGISTRATION_USER_ASYNC, LOGIN_USER_ASYNC, OPEN_AUTHORIZATION
} from '../constants/actionTypes';

const logOutUser = () => ({
  type: LOGIN_USER
});

const toggleIsAuthorization = () => ({
  type: OPEN_AUTHORIZATION
});

const toggleTab = value => ({
  type: TOGGLE_TAB,
  payload: value
});

const logInUser = value => ({
  type: LOGIN_USER,
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


export {
  toggleIsAuthorization,
  toggleTab,
  logInUser,
  registrationUser,
  logInUserAsync,
  registrationUserAsync,
  logOutUser
};
