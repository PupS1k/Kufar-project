import {put, call, takeEvery} from 'redux-saga/effects';
import {
  registrationUser, changeUser, toggleIsAuthorization, toggleIsRegistration
} from '../actions/user';
import {REGISTRATION_USER_ASYNC, LOGIN_USER_ASYNC} from '../constants/actionTypes';

function* signUpAsync(action) {
  const data = yield call(fetchPost, action.url, action.data);
  if (data) yield put(registrationUser());
  else yield put(toggleIsRegistration());
}
function* logInAsync(action) {
  const data = yield call(fetchGet, action.url, action.data);
  if (data) {
    yield put(toggleIsAuthorization());
    yield put(changeUser(data.mail));
  }
}

function* watchRegistration() {
  yield takeEvery(REGISTRATION_USER_ASYNC, signUpAsync);
}

function* watchLogIn() {
  yield takeEvery(LOGIN_USER_ASYNC, logInAsync);
}

const fetchPost = (url, data) => fetch(`http://localhost:3000/${url}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then((res) => {
  if (!res.ok) throw new Error(res.statusText);
  return res;
})
  .then(res => res.json())
  .catch(err => console.log(err));

const fetchGet = (url, data) => fetch(`http://localhost:3000/${url}`, {
  method: 'GET',
  headers: {
    Authorization: window.btoa(data)
  }
})
  .then((res) => {
    if (!res.ok) throw new Error(res.statusText);
    return res;
  })
  .then(res => res.json())
  .catch(err => console.log(err));

export {
  watchLogIn,
  watchRegistration
};
