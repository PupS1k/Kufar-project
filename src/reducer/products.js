// import {put, call, takeEvery} from 'redux-saga/effects';


const CHANGE_PRODUCTS = 'CHANGE_PRODUCTS';
const CHANGE_CATEGORIES_FILTER = 'CHANGE_CATEGORIES_FILTER';
const ADD_PRODUCTS = 'ADD_PRODUCTS';
// const ADD_PRODUCTS_ASYNC = 'ADD_PRODUCTS_ASYNC';

const initialState = {
  categoriesFilter: '',
  categoriesCorrectProducts: [],
  products: [],
  productsBack: []
};

// Reducer
const products = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        productsBack: action.payload,
        categoriesCorrectProducts: action.payload,
        products: action.payload
      };
    case CHANGE_CATEGORIES_FILTER:
      const correctProducts = state.productsBack.filter(product => product.categories
        .indexOf(action.payload) > -1 || action.payload === 'Все категории'
        || action.payload === '');
      return {
        ...state,
        categoriesFilter: action.payload,
        categoriesCorrectProducts: [...correctProducts],
        products: [...correctProducts]
      };
    default:
      return state;
  }
};

// Action creator
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

const addProductsAsync = value => dispatch => fetch(`http://localhost:3000/${value}`)
  .then((res) => {
    if (!res.ok) throw new Error(res.statusText);
    return res;
  })
  .then(res => res.json())
  .then(data => dispatch(addProductsBack(data)))
  .catch(err => console.log(err));

// Sagas
// function* addProducts(action) {
//   const data = yield call(fetchGet, action.payload);
//   console.log('data');
//   yield put(addProductsBack(data));
// }
//
// function* watchAddProducts() {
//   yield takeEvery(ADD_PRODUCTS_ASYNC, addProducts);
// }
// const fetchGet = url => fetch(`http://localhost:8080/${url}`)
//   .then((res) => {
//     console.log('fetch');
//     if (!res.ok) throw new Error(res.statusText);
//     return res;
//   })
//   .then(res => res.json())
//   .catch(err => console.log(err));


// Selectors
const getProducts = state => state.products.products;
const getCategoriesCorrectProducts = state => state.products.categoriesCorrectProducts;

export default products;
export {
  // sagas
  // watchAddProducts,
  // actions
  addProductsAsync,
  changeProducts,
  changeCategoriesFilter,

  // selectors
  getProducts,
  getCategoriesCorrectProducts
};
