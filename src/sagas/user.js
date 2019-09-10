import {put, call, takeEvery} from 'redux-saga/effects';
import {
  registrationUser, changeUser, toggleIsOpenModel, toggleIsRegistration
} from '../actions/user';
import {REGISTRATION_USER_ASYNC, LOGIN_USER_ASYNC} from '../constants/actionTypes';

function* signUpAsync(action) {
  const data = yield call(fetchPost, action.url, action.data);
  if (data) yield put(registrationUser());
  else yield put(toggleIsRegistration());
}
function* logInAsync(action) {
  const token = yield call(fetchPost, action.url, action.data);
  localStorage.setItem('auth-token', JSON.stringify(token));
  const headers = {'auth-token': token};
  const data = yield call(fetchGet, action.url, headers);
  if (data) {
    yield put(toggleIsOpenModel());
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

const fetchGet = (url, headers) => fetch(`http://localhost:3000/${url}`, {
  method: 'GET',
  headers
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
