export default () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

  return `${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}`;
};

export const fetchReq = (url, options) => fetch(`http://localhost:3000/${url}`, options)
  .then((res) => {
    if (!res.ok) throw new Error(res.statusText);
    return res;
  })
  .then(res => res.json())
  .catch(err => console.log(err));

export const applyFilters = (filters, product) => {
  const isCorrectLocationFilter = filters.location === 'Область' || product.location.includes(filters.location);
  const isCorrectPriceFilter = (filters.priceTo === '' && filters.priceFrom === '')
    || (filters.priceTo === '' && filters.priceFrom === '0')
    || (Number(filters.priceFrom) <= Number(product.price)
      && Number(filters.priceTo) >= Number(product.price))
    || product.price === 'Договорная' || product.price === 'Бесплатно';
  const isCorrectStateFilter = filters.stateProduct === 'Любое' || product.state === filters.stateProduct;
  const isCorrectSellerFilter = filters.seller === 'Любой' || product.seller === filters.seller;
  const isCorrectWithPhoto = filters.isWithPhoto ? product.image : true;
  const isCorrectFashionableSummer = filters.fashionableSummer ? product.fashionableSummer : true;
  const isCorrectInstallmentHalva = filters.installmentHalva ? product.installmentHalva : true;
  const isCorrectIsExchange = filters.isExchange ? product.isExchange : true;

  return isCorrectLocationFilter && isCorrectPriceFilter && isCorrectStateFilter
    && isCorrectSellerFilter && isCorrectWithPhoto && isCorrectFashionableSummer
    && isCorrectInstallmentHalva && isCorrectIsExchange;
};

export const location = (region, city) => region + (city !== 'Любой' && city !== '' ? `, ${city}` : '');
