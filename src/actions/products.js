import {
  ADD_PRODUCTS, GET_PRODUCTS_ASYNC,
  CHANGE_PRODUCTS, CHANGE_CATEGORY_FILTER, CREATE_PRODUCT_ASYNC
} from '../constants/actionTypes';

const changeProducts = value => ({
  type: CHANGE_PRODUCTS,
  payload: value
});
const changeCategoriesFilter = value => ({
  type: CHANGE_CATEGORY_FILTER,
  payload: value
});
const addProductsBack = value => ({
  type: ADD_PRODUCTS,
  payload: value
});
const getProductAsync = value => ({
  type: GET_PRODUCTS_ASYNC,
  payload: value
});
const createProductAsync = (url, data) => ({
  type: CREATE_PRODUCT_ASYNC,
  url,
  data
});

export {
  changeProducts,
  changeCategoriesFilter,
  addProductsBack,
  getProductAsync,
  createProductAsync
};
