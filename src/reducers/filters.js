import {CHANGE_FILTERS, RESET_FILTERS} from '../actions/filters';

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
  isExchange: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTERS:
      return {
        ...state,
        ...action.payload
      };
    case RESET_FILTERS:
      return initialState;
    default:
      return state;
  }
};
