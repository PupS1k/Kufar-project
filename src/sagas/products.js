import {put, call, takeEvery} from 'redux-saga/effects';
import {addProductsBack, addProduct} from '../actions/products';
import {CREATE_PRODUCT_ASYNC, GET_PRODUCTS_ASYNC} from '../constants/actionTypes';
import {addUserProduct} from '../actions/user';
import {fetchReq} from '../constants';
import guid from '../utils';

function* getProducts(action) {
  const data = yield call(fetchReq, action.payload);
  yield put(addProductsBack(data));
}

function* createProduct(action) {
  const token = JSON.parse(localStorage.getItem('Authorization'));
  let fileName = '';
  if (action.data.image) {
    const urlImage = `${action.url}/image/${guid()}`;
    fileName = yield call(fetchReq, urlImage, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: action.data.image
    });
  }
  const data = {...action.data, image: fileName};
  const productData = yield call(fetchReq, action.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  const product = {...data, id: productData.id, sellerType: productData.sellerType};
  yield put(addProduct(product));
  yield put(addUserProduct(product));
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
