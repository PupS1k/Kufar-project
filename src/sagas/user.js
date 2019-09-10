import {put, call, takeEvery} from 'redux-saga/effects';
import {
  registrationUser, changeUser, toggleIsOpenModel, toggleIsRegistration
} from '../actions/user';
import {REGISTRATION_USER_ASYNC, LOGIN_USER_ASYNC} from '../constants/actionTypes';
import {fetchReq} from '../constants';

function* signUpAsync(action) {
  const data = yield call(fetchReq, action.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(action.data)
  });
  if (data) yield put(registrationUser());
  else yield put(toggleIsRegistration());
}
function* logInAsync(action) {
  const token = yield call(fetchReq, action.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(action.data)
  });

  localStorage.setItem('auth-token', JSON.stringify(token));

  const data = yield call(fetchReq, action.url, {
    headers: {'auth-token': token}
  });

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

export {
  watchLogIn,
  watchRegistration
};
