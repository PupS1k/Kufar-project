import {
  put, call, takeEvery, all
} from 'redux-saga/effects';
import {
  addProductsBack, addProduct, addProductsLoading, CREATE_PRODUCT_ASYNC, GET_PRODUCTS_ASYNC
} from '../actions/products';
import {addUserProduct} from '../actions/user';
import {guid, fetchReq} from '../utils';

function* getProducts(action) {
  yield put(addProductsLoading());
  const data = yield call(fetchReq, 'products');
  yield put(addProductsBack(data));
}

function* createProduct(action) {
  const token = JSON.parse(localStorage.getItem('Authorization'));
  let fileName = '';
  if (action.payload.image) {
    const urlImage = `images/${guid()}`;
    fileName = yield call(fetchReq, urlImage, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: action.payload.image
    });
  }
  const data = {...action.payload, image: fileName};
  const product = yield call(fetchReq, 'products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  yield put(addProduct(product));
  yield put(addUserProduct(product));
}

export default all([
  takeEvery(GET_PRODUCTS_ASYNC, getProducts),
  takeEvery(CREATE_PRODUCT_ASYNC, createProduct)
]);
