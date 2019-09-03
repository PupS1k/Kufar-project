import {
  ADD_PRODUCTS, CHANGE_PRODUCTS, CHANGE_CATEGORY_FILTER
} from '../constants/actionTypes';

const initialState = {
  categoryFilter: '',
  productsByCategory: [],
  products: [],
  allProducts: []
};

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
        allProducts: action.payload,
        productsByCategory: action.payload,
        products: action.payload
      };
    case CHANGE_CATEGORY_FILTER:
      const correctProducts = state.allProducts.filter(product => product.categories
        .includes(action.payload) || action.payload === 'Все категории'
        || action.payload === '');
      return {
        ...state,
        categoryFilter: action.payload,
        productsByCategory: [...correctProducts],
        products: [...correctProducts]
      };
    default:
      return state;
  }
};

export default products;
