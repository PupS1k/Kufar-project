import {
  CHANGE_IS_EXCHANGE, CHANGE_INSTALLMENT_HALVA, CHANGE_FASHIONABLE_SUMMER,
  CHANGE_SELLER, CHANGE_STATE_PRODUCT, CHANGE_PRICE_FROM, CHANGE_CITY,
  CHANGE_CORRECT_PRODUCTS, CHANGE_IS_WITH_PHOTO, CHANGE_PRICE_TO, CHANGE_REGION
} from '../constants/actionTypes';
const initialState = {
  region: 'Область',
  city: 'Любой',
  priceFrom: '0',
  priceTo: '',
  stateProduct: 'Любое',
  seller: 'Любой',
  isWithPhoto: false,
  fashionableSummer: false,
  installmentHalva: false,
  isExchange: false,
  correctProducts: []
};

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

export default filters;
