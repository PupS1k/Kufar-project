import {
  ADD_PRODUCTS, GET_PRODUCTS_ASYNC,
  CHANGE_PRODUCTS, CHANGE_CATEGORY_FILTER, CREATE_PRODUCT_ASYNC, ADD_PRODUCT, DELETE_PRODUCT
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

const addProduct = value => ({
  type: ADD_PRODUCT,
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

const deleteProduct = value => ({
  type: DELETE_PRODUCT,
  payload: value
});

export {
  changeProducts,
  changeCategoriesFilter,
  addProductsBack,
  getProductAsync,
  createProductAsync,
  addProduct,
  deleteProduct
};
