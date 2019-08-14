import {put, call, takeEvery} from 'redux-saga/effects';
import {addProductsBack} from '../actions/products'
import {GET_PRODUCTS_ASYNC} from '../constants/actionTypes';

function* addProducts(action) {
  const data = yield call(fetchGet, action.payload);
  yield put(addProductsBack(data));
}

function* watchAddProducts() {
  yield takeEvery(GET_PRODUCTS_ASYNC, addProducts);
}

const fetchGet = url => fetch(`http://localhost:3000/${url}`)
  .then((res) => {
    if (!res.ok) throw new Error(res.statusText);
    return res;
  })
  .then(res => res.json())
  .catch(err => console.log(err));

export {
  watchAddProducts,
};
