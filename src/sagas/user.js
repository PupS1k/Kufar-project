import {put, call, takeEvery} from 'redux-saga/effects';
import {registrationUser, logInUser, toggleIsAuthorization} from '../actions/user'
import {REGISTRATION_USER_ASYNC, LOGIN_USER_ASYNC} from '../constants/actionTypes';

function* registrationUserAsync(action) {
  const data = yield call(fetchPost, action.url, action.data);
  if(data)
    yield put(registrationUser());
  else{
  }
}
function* logInUserAsync(action) {
  const data = yield call(fetchPost, action.url, action.data);
  if(data === true)
    yield put(logInUser(''));
  else {
    yield put(toggleIsAuthorization());
    yield put(logInUser(data.mail));
  }
}

function* watchRegistration() {
  yield takeEvery(REGISTRATION_USER_ASYNC, registrationUserAsync);
}

function* watchLogIn() {
  yield takeEvery(LOGIN_USER_ASYNC, logInUserAsync);
}

const fetchPost = (url, data) => fetch("http://localhost:3000/" + url, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(res => {
  if (!res.ok) throw new Error(res.statusText);
  return res;
})
  .then(res => res.json())
  .catch(err => console.log(err));

export {
  watchLogIn,
  watchRegistration
};
