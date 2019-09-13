import {put, call, takeEvery} from 'redux-saga/effects';
import {addProductsBack, addProduct} from '../actions/products';
import {CREATE_PRODUCT_ASYNC, GET_PRODUCTS_ASYNC} from '../constants/actionTypes';
import {addUserProduct} from '../actions/user';
import {fetchReq} from '../constants';

function* getProducts(action) {
  const data = yield call(fetchReq, action.payload);
  yield put(addProductsBack(data));
}

function* createProduct(action) {
  const token = JSON.parse(localStorage.getItem('auth-token'));
  let fileName = '';
  if (action.data.image) {
    const urlImage = `${action.url}/image`;
    fileName = yield call(fetchReq, urlImage, {
      method: 'POST',
      headers: {
        'auth-token': token
      },
      body: action.data.image
    });
  }
  const data = {...action.data, image: fileName};
  yield call(fetchReq, action.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': token
    },
    body: JSON.stringify(data)
  });
  yield put(addProduct(data));
  yield put(addUserProduct(data));
}

function* watchGetProducts() {
  yield takeEvery(GET_PRODUCTS_ASYNC, getProducts);
}

function* watchCreateProduct() {
  yield takeEvery(CREATE_PRODUCT_ASYNC, createProduct);
}

export {
  watchGetProducts,
  watchCreateProduct
};
