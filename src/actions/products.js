import {
  ADD_PRODUCTS, GET_PRODUCTS_ASYNC, CHANGE_PRODUCTS, CHANGE_CATEGORIES_FILTER
} from '../constants/actionTypes';

const changeProducts = value => ({
  type: CHANGE_PRODUCTS,
  payload: value
});
const changeCategoriesFilter = value => ({
  type: CHANGE_CATEGORIES_FILTER,
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

export {
  changeProducts,
  changeCategoriesFilter,
  addProductsBack,
  getProductAsync
};
