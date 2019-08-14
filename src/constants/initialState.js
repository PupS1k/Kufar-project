const initialStateFilters = {
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
  correctProducts: []
};
const initialStateProducts = {
  categoriesFilter: '',
  categoriesCorrectProducts: [],
  products: [],
  productsBack: []
};
export {
  initialStateFilters,
  initialStateProducts
};
