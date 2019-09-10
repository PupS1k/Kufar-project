import {put, call, takeEvery} from 'redux-saga/effects';
import {addProductsBack} from '../actions/products';
import {CREATE_PRODUCT_ASYNC, GET_PRODUCTS_ASYNC} from '../constants/actionTypes';

function* getProducts(action) {
  const data = yield call(fetchGet, action.payload);
  yield put(addProductsBack(data));
}

function* createProduct(action) {
  const token = JSON.parse(localStorage.getItem('auth-token'));
  let fileName = '';
  if (action.data.image) {
    const urlImage = `${action.url}/image`;
    fileName = yield call(fetchPost, urlImage, {
      method: 'POST',
      headers: {
        'auth-token': token
      },
      body: action.data.image
    });
  }
  const data = {...action.data, image: fileName};
  yield call(fetchPost, action.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': token
    },
    body: JSON.stringify(data)
  });
  getProducts(action);
}

function* watchGetProducts() {
  yield takeEvery(GET_PRODUCTS_ASYNC, getProducts);
}

function* watchCreateProduct() {
  yield takeEvery(CREATE_PRODUCT_ASYNC, createProduct);
}

const fetchPost = (url, options) => fetch(`http://localhost:3000/${url}`, options)
  .then((res) => {
    if (!res.ok) throw new Error(res.statusText);
    return res;
  })
  .then(res => res.json())
  .catch(err => console.log(err));

const fetchGet = url => fetch(`http://localhost:3000/${url}`)
  .then((res) => {
    if (!res.ok) throw new Error(res.statusText);
    return res;
  })
  .then(res => res.json())
  .catch(err => console.log(err));

export {
  watchGetProducts,
  watchCreateProduct
};
