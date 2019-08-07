export const locations = [
  {region: 'Брестская', city: ['Лунинец', 'Лунин', 'Брест']},
  {region: 'Могилевская', city: ['Могилев', 'Бобруйск', 'Жолки']},
  {region: 'Гомельская', city: ['Жлобин', 'Гомель', 'Петриков']},
  {region: 'Витебская', city: ['Орша', 'Глубоокое', 'Полоцк']},
  {region: 'Гродненская', city: ['Могилев', 'Скидель', 'Квасовка']},
  {region: 'Минская', city: ['Слуцк', 'Крупки', 'Любань']},
  {region: 'Минск', city: ['Центральный', 'Советский', 'Первомайский']}];

export const stateFilter = [{name: 'Любое', checked: true},
  {name: 'Новое', checked: false}, {name: 'Б/у', checked: false}];

export const sellerFilter = [{name: 'Любой', checked: true},
  {name: 'Частное лицо', checked: false}, {name: 'Компания', checked: false}];

export const checkboxFilter = [{name: 'Модное лето'}, {name: 'Рассорчка по халве'},
  {name: 'Только с фото'}, {name: 'Возможен обмен'}];

export const applyFilters = (
    locationFilter,
    priceToFilter,
    priceFromFilter,
    stateFilter,
    sellerFilter,
    withPhotoFilter,
    fashionableSummerFilter,
    installmentHalvaFilter,
    isExchangeFilter,
    product
) => {
  const isCorrectLocationFilter = product.location.indexOf(locationFilter)>-1 || locationFilter==='Область';
  const isCorrectPriceFilter = (priceToFilter==='' && priceFromFilter==='') ||
      (priceToFilter==='' && priceFromFilter==='0') ||
      (priceFromFilter <= product.price && priceToFilter >= product.price) ||
      product.price==='Договорная' || product.price==='Бесплатно';
  const isCorrectStateFilter = stateFilter==='Любое' || product.state === stateFilter;
  const isCorrectSellerFilter = sellerFilter==='Любой' || product.seller === sellerFilter;
  const isCorrectWithPhoto = withPhotoFilter ? product.image : true;
  const isCorrectFashionableSummer = fashionableSummerFilter ? product.fashionableSummer : true;
  const isCorrectInstallmentHalva = installmentHalvaFilter ? product.installmentHalva : true;
  const isCorrectIsExchange = isExchangeFilter ? product.isExchange : true;

  return isCorrectLocationFilter && isCorrectPriceFilter && isCorrectStateFilter &&
      isCorrectSellerFilter && isCorrectWithPhoto && isCorrectFashionableSummer &&
      isCorrectInstallmentHalva && isCorrectIsExchange;
};