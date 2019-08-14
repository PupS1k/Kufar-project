import {
  CHANGE_IS_EXCHANGE, CHANGE_INSTALLMENT_HALVA, CHANGE_FASHIONABLE_SUMMER,
  CHANGE_SELLER, CHANGE_STATE_PRODUCT, CHANGE_PRICE_FROM, CHANGE_CITY,
  CHANGE_CORRECT_PRODUCTS, CHANGE_IS_WITH_PHOTO, CHANGE_PRICE_TO, CHANGE_REGION
} from '../constants/actionTypes';

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

export {
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
  changeCorrectProducts
};
