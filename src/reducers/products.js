import {
  ADD_PRODUCTS, CHANGE_PRODUCTS, CHANGE_CATEGORIES_FILTER
} from '../constants/actionTypes';
import {initialStateProducts as initialState} from '../constants/initialState';

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
        .includes(action.payload) || action.payload === 'Все категории'
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

export default products;
