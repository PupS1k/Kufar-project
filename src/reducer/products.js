import productsList from '../products';

const CHANGE_PRODUCTS = 'CHANGE_PRODUCTS';
const CHANGE_CATEGORIES_CORRECT_PRODUCTS = 'CHANGE_CATEGORIES_CORRECT_PRODUCTS';
const CHANGE_CATEGORIES_FILTER = 'CHANGE_CATEGORIES_FILTER';

const initialState = {
  categoriesFilter: '',
  categoriesCorrectProducts: productsList,
  products: productsList
};

// Reducer
const products = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case CHANGE_CATEGORIES_FILTER:
      const correctProducts = productsList.filter(product => product.categories
        .indexOf(action.payload) > -1 || action.payload === 'Все категории' ||
        action.payload === '');
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

// Selectors
const getProducts = state => state.products.products;
const getCategoriesCorrectProducts = state => state.products.categoriesCorrectProducts;

export default products;
export {
  // actions
  changeProducts,
  changeCategoriesFilter,

  // selectors
  getProducts,
  getCategoriesCorrectProducts
};
