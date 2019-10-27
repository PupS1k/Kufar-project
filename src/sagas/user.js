import {
  put, call, takeEvery, all
} from 'redux-saga/effects';
import {
  signInSuccess,
  signUpSuccess,
  signUpError,
  signInError,
  signInLoading,
  signUpLoading,
  addUserProducts,
  deleteUserProduct,
  SIGN_UP,
  SIGN_IN,
  DELETE_USER_PRODUCT_ASYNC
} from '../actions/user';
import {deleteProduct} from '../actions/products';
import {fetchReq} from '../utils';

const saveToken = (token) => localStorage.setItem('Authorization', JSON.stringify(token));

function* signUpAsync(action) {
  yield put(signUpLoading());

  try {
    const data = yield call(fetchReq, 'registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action.payload)
    });

    saveToken(data.token);

    yield put(signUpSuccess(data.mail, data.id));
    action.handleModalClose();
  }catch (err) {
    yield put(signUpError(err.message));
  }

}

function* signInAsync(action) {
  yield put(signInLoading());

  try {
    const data = yield call(fetchReq, 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action.payload)
    });

    saveToken(data.token);

    yield put(signInSuccess(data.mail, data.id));

    const products = yield call(fetchReq, `products/user/${data.id}`, {
      headers: {Authorization: `Bearer ${data.token}`}
    });
    yield put(addUserProducts(products));
    action.handleModalClose();
  }catch (err) {
    yield put(signInError(err.message));
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
  takeEvery(SIGN_UP, signUpAsync),
  takeEvery(SIGN_IN, signInAsync),
  takeEvery(DELETE_USER_PRODUCT_ASYNC, deleteProductAsync)
]);
