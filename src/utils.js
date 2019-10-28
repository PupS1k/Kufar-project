export const guid = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

  return `${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}`;
};

export const fetchReq = (url, options) => fetch(`/api/${url}`, options)
  .then(res => res.json().then((data) => {
    if (res.status >= 200 && res.status < 400) {
      return data;
    }

    return Promise.reject(data);
  }));

export const applyFilters = (filters, product) => {
  const isCorrectLocationFilter = filters.location === 'Область'
    || product.location.includes(filters.location);
  const isCorrectPriceFilter = (filters.priceTo === '' && filters.priceFrom === '')
    || (filters.priceTo === '' && filters.priceFrom === '0')
    || (Number(filters.priceFrom) <= Number(product.price)
      && Number(filters.priceTo) >= Number(product.price))
    || product.price === 'Договорная' || product.price === 'Бесплатно';
  const isCorrectStateFilter = filters.stateProduct === 'Любое'
    || product.state === filters.stateProduct;
  const isCorrectSellerFilter = filters.seller === 'Любой' || product.sellerType === filters.seller;
  const isCorrectWithPhoto = filters.isWithPhoto ? product.image : true;
  const isCorrectFashionableSummer = filters.fashionableSummer
    ? product.stocks.fashionableSummer : true;
  const isCorrectInstallmentHalva = filters.installmentHalva ? product.installmentHalva : true;
  const isCorrectIsExchange = filters.isExchange ? product.isExchange : true;

  return isCorrectLocationFilter && isCorrectPriceFilter && isCorrectStateFilter
    && isCorrectSellerFilter && isCorrectWithPhoto && isCorrectFashionableSummer
    && isCorrectInstallmentHalva && isCorrectIsExchange;
};

export const location = (region, city) => region
  + (city !== 'Любой' && city !== '' ? `, ${city}` : '');

export const sortProducts = (sort, products) => {
  switch (sort) {
    case 'По дате':
      products
        .sort((first, second) => (first.createDate > second.createDate ? 1 : -1));
      break;
    case 'По цене ↑':
      products.sort((first, second) => {
        const numFirst = Number(first.price);
        const numSecond = Number(second.price);
        if (isNaN(numFirst) && !isNaN(numSecond)) return 1;
        if (!isNaN(numFirst) && isNaN(numSecond)) return -1;
        if (!isNaN(numFirst) && !isNaN(numSecond)) return numFirst > numSecond ? -1 : 1;
        return 0;
      });
      break;
    case 'По цене ↓':
      products.sort((first, second) => {
        const numFirst = Number(first.price);
        const numSecond = Number(second.price);
        if (isNaN(numFirst) && !isNaN(numSecond)) return -1;
        if (!isNaN(numFirst) && isNaN(numSecond)) return 1;
        if (!isNaN(numFirst) && !isNaN(numSecond)) return numFirst > numSecond ? 1 : -1;
        return 0;
      });
      break;
    default:
      break;
  }
  console.log(products);
  return products;
};
