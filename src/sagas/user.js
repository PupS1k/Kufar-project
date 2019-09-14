import {put, call, takeEvery} from 'redux-saga/effects';
import {
  registrationUser, changeUser, toggleIsOpenModel,
  toggleIsRegistration, addUserProducts, deleteUserProduct
} from '../actions/user';
import {
  REGISTRATION_USER_ASYNC, LOGIN_USER_ASYNC, DELETE_USER_PRODUCT_ASYNC
} from '../constants/actionTypes';
import {deleteProduct} from '../actions/products';
import {fetchReq} from '../constants';

function* signUpAsync(action) {
  const data = yield call(fetchReq, action.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(action.data)
  });
  if (data.message) yield put(registrationUser(data.message));
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
    yield put(changeUser(data.mail, data._id));
    yield put(addUserProducts(data.products));
  }
}

function* deleteProductAsync(action) {
  const token = JSON.parse(localStorage.getItem('auth-token'));
  const data = yield call(fetchReq, action.url, {
    method: 'DELETE',
    headers: {'auth-token': token}
  });

  if (data.id) {
    yield put(deleteUserProduct(data.id));
    yield put(deleteProduct(data.id));
  }
}

function* watchRegistration() {
  yield takeEvery(REGISTRATION_USER_ASYNC, signUpAsync);
}

function* watchLogIn() {
  yield takeEvery(LOGIN_USER_ASYNC, logInAsync);
}

function* watchDeleteProduct() {
  yield takeEvery(DELETE_USER_PRODUCT_ASYNC, deleteProductAsync);
}

export {
  watchLogIn,
  watchRegistration,
  watchDeleteProduct
};
