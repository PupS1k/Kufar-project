const getRegion = state => state.filters.region;
const getCorrectProducts = state => state.filters.correctProducts;
const getPriceTo = state => state.filters.priceTo;
const getPriceFrom = state => state.filters.priceFrom;
const getFilters = state => ({
  location: state.filters.region +
    (state.filters.city !== 'Любой' && state.filters.city !== '' ? `, ${state.filters.city}` : ''),
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

export {
  getFilters,
  getCorrectProducts,
  getRegion,
  getPriceTo,
  getPriceFrom
};
