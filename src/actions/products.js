export const CHANGE_PRODUCTS = 'CHANGE_PRODUCTS';
export const CHANGE_CATEGORY_FILTER = 'CHANGE_CATEGORY_FILTER';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const GET_PRODUCTS_ASYNC = 'GET_PRODUCTS_ASYNC';
export const CREATE_PRODUCT_ASYNC = 'CREATE_PRODUCT_ASYNC';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const changeProducts = value => ({
  type: CHANGE_PRODUCTS,
  payload: value
});
export const changeCategoriesFilter = value => ({
  type: CHANGE_CATEGORY_FILTER,
  payload: value
});
export const addProductsBack = value => ({
  type: ADD_PRODUCTS,
  payload: value
});

export const addProduct = value => ({
  type: ADD_PRODUCT,
  payload: value
});

export const getProductAsync = () => ({
  type: GET_PRODUCTS_ASYNC
});

export const createProductAsync = value => ({
  type: CREATE_PRODUCT_ASYNC,
  payload: value
});

export const deleteProduct = value => ({
  type: DELETE_PRODUCT,
  payload: value
});
