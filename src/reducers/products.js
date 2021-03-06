import {
  ADD_PRODUCTS,
  CHANGE_PRODUCTS,
  CHANGE_CATEGORY_FILTER,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCTS_LOADING,
  CHANGE_DISPLAY_PRODUCTS,
  CHANGE_SEARCH_VALUE, CHANGE_SORT_VALUE
} from '../actions/products';
import {sortProducts} from '../utils';

const initialState = {
  categoryFilter: '',
  productsByCategory: [],
  products: [],
  allProducts: [],
  isLoading: false,
  isLineDisplay: true,
  searchValue: '',
  sortValue: 'По дате'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SORT_VALUE:
      return {
        ...state,
        sortValue: action.payload,
        products: sortProducts(action.payload, [...state.products])
      };
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };
    case CHANGE_DISPLAY_PRODUCTS:
      return {
        ...state,
        isLineDisplay: !state.isLineDisplay
      };
    case CHANGE_PRODUCTS:
      return {
        ...state,
        products: sortProducts(state.sortValue, action.payload)
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        productsByCategory: action.payload,
        products: action.payload,
        isLoading: false
      };
    case ADD_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case ADD_PRODUCT:
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload],
        productsByCategory: [...state.allProducts, action.payload],
        products: [...state.allProducts, action.payload]
      };
    case DELETE_PRODUCT:
      const newProducts = state.allProducts.filter(product => product.id !== action.payload);
      return {
        ...state,
        allProducts: newProducts,
        productsByCategory: newProducts,
        products: newProducts
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
