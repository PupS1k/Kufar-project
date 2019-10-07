import {put, call, takeEvery, all} from 'redux-saga/effects';
import {
  registrationUser, changeUser, toggleIsOpenModel,
  toggleIsRegistration, addUserProducts, deleteUserProduct
} from '../actions/user';
import {
  REGISTRATION_USER_ASYNC, LOGIN_USER_ASYNC, DELETE_USER_PRODUCT_ASYNC
} from '../constants/actionTypes';
import {deleteProduct} from '../actions/products';
import {fetchReq} from '../constants';

function* authorizationUser(data) {
  localStorage.setItem('Authorization', JSON.stringify(data.token));

  yield put(toggleIsOpenModel());
  yield put(changeUser(data.mail, data.id));
}

function* signUpAsync(action) {
  const data = yield call(fetchReq, action.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(action.data)
  });
  if (data.message) yield put(registrationUser(data.message));
  else {
    yield put(toggleIsRegistration());
    yield authorizationUser(data.user);
  }
}
function* logInAsync(action) {
  const data = yield call(fetchReq, action.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(action.data)
  });
  if (data) {
    yield authorizationUser(data);

    const products = yield call(fetchReq, `products/user/${data.id}`, {
      headers: {Authorization: `Bearer ${data.token}`}
    });
    yield put(addUserProducts(products));
  }
}

function* deleteProductAsync(action) {
  const token = JSON.parse(localStorage.getItem('Authorization'));
  const data = yield call(fetchReq, action.url, {
    method: 'DELETE',
    headers: {Authorization: `Bearer ${token}`}
  });

  if (data.id) {
    yield put(deleteUserProduct(data.id));
    yield put(deleteProduct(data.id));
  }
}

export default all([
  takeEvery(REGISTRATION_USER_ASYNC, signUpAsync),
  takeEvery(LOGIN_USER_ASYNC, logInAsync),
  takeEvery(DELETE_USER_PRODUCT_ASYNC, deleteProductAsync)
]);
