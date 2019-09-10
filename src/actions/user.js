import {
  TOGGLE_TAB, CHANGE_USER, REGISTRATION_USER, TOGGLE_IS_REGISTRATION,
  REGISTRATION_USER_ASYNC, LOGIN_USER_ASYNC, OPEN_MODEL
} from '../constants/actionTypes';

const changeUser = value => ({
  type: CHANGE_USER,
  payload: value
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


export {
  toggleIsOpenModel,
  toggleTab,
  changeUser,
  registrationUser,
  logInUserAsync,
  registrationUserAsync,
  toggleIsRegistration
};
