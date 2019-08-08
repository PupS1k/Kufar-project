import productList from '../products';

const CHANGE_REGION = 'CHANGE_REGION';
const CHANGE_CITY = 'CHANGE_CITY';
const CHANGE_PRICE_FROM = 'CHANGE_PRICE_FROM';
const CHANGE_PRICE_TO = 'CHANGE_PRICE_TO';
const CHANGE_STATE_PRODUCT = 'CHANGE_STATE_PRODUCT';
const CHANGE_SELLER = 'CHANGE_SELLER';
const CHANGE_IS_WITH_PHOTO = 'CHANGE_IS_WITH_PHOTO';
const CHANGE_FASHIONABLE_SUMMER = 'CHANGE_FASHIONABLE_SUMMER';
const CHANGE_INSTALLMENT_HALVA = 'CHANGE_INSTALLMENT_HALVA';
const CHANGE_IS_EXCHANGE = 'CHANGE_IS_EXCHANGE';
const CHANGE_CORRECT_PRODUCTS = 'CHANGE_CORRECT_PRODUCTS';

const initialState = {
  region: 'Область',
  city: 'Любой',
  priceFrom: '',
  priceTo: '',
  stateProduct: 'Любое',
  seller: 'Любой',
  isWithPhoto: false,
  fashionableSummer: false,
  installmentHalva: false,
  isExchange: false,
  correctProducts: productList
};

// Reducer
const filters = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_REGION:
      return {
        ...state,
        region: action.payload,
        city: 'Любой'
      };
    case CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case CHANGE_PRICE_FROM:
      return {
        ...state,
        priceFrom: action.payload
      };
    case CHANGE_PRICE_TO:
      return {
        ...state,
        priceTo: action.payload
      };
    case CHANGE_STATE_PRODUCT:
      return {
        ...state,
        stateProduct: action.payload
      };
    case CHANGE_SELLER:
      return {
        ...state,
        seller: action.payload
      };
    case CHANGE_IS_WITH_PHOTO:
      return {
        ...state,
        isWithPhoto: !state.isWithPhoto
      };
    case CHANGE_FASHIONABLE_SUMMER:
      return {
        ...state,
        fashionableSummer: !state.fashionableSummer
      };
    case CHANGE_INSTALLMENT_HALVA:
      return {
        ...state,
        installmentHalva: !state.installmentHalva
      };
    case CHANGE_IS_EXCHANGE:
      return {
        ...state,
        isExchange: !state.isExchange
      };
    case CHANGE_CORRECT_PRODUCTS:
      return {
        ...state,
        correctProducts: action.payload,
      };
    default:
      return state;
  }
};

// Action creator
const changeRegion = value => ({
  type: CHANGE_REGION,
  payload: value
});
const changeCity = value => ({
  type: CHANGE_CITY,
  payload: value
});
const changePriceFrom = value => ({
  type: CHANGE_PRICE_FROM,
  payload: value
});
const changePriceTo = value => ({
  type: CHANGE_PRICE_TO,
  payload: value
});
const changeStateProduct = value => ({
  type: CHANGE_STATE_PRODUCT,
  payload: value
});
const changeSeller = value => ({
  type: CHANGE_SELLER,
  payload: value
});
const changeIsWithPhoto = () => ({
  type: CHANGE_IS_WITH_PHOTO,
});
const changeFashionableSummer = () => ({
  type: CHANGE_FASHIONABLE_SUMMER,
});
const changeInstallmentHalva = () => ({
  type: CHANGE_INSTALLMENT_HALVA,
});
const changeIsExchange = () => ({
  type: CHANGE_IS_EXCHANGE,
});
const changeCorrectProducts = value => ({
  type: CHANGE_CORRECT_PRODUCTS,
  payload: value
});


// Selectors
const getRegion = state => state.filters.region;
const getCorrectProducts = state => state.filters.correctProducts;
const getFilters = state => ({
  location: state.filters.region
          + (state.filters.city !== 'Любой' && state.filters.city !== '' ? `, ${state.filters.city}` : ''),
  priceFrom: state.filters.priceFrom,
  priceTo: state.filters.priceTo,
  stateProduct: state.filters.stateProduct,
  seller: state.filters.seller,
  isWithPhoto: state.filters.isWithPhoto,
  fashionableSummer: state.filters.fashionableSummer,
  installmentHalva: state.filters.installmentHalva,
  isExchange: state.filters.isExchange,
  correctProducts: state.filters.correctProducts
});

export default filters;
export {
  // actions
  changeRegion,
  changeCity,
  changePriceFrom,
  changePriceTo,
  changeStateProduct,
  changeSeller,
  changeIsWithPhoto,
  changeFashionableSummer,
  changeInstallmentHalva,
  changeIsExchange,
  changeCorrectProducts,

  // selectors
  getFilters,
  getCorrectProducts,
  getRegion
};
