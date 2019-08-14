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

export const applyFilters = (filters, product) => {
  const isCorrectLocationFilter = product.location.includes(filters.location) || filters.location==='Область';
  const isCorrectPriceFilter = (filters.priceTo==='' && filters.priceFrom==='') ||
      (filters.priceTo==='' && filters.priceFrom==='0') ||
      (filters.priceFrom <= product.price && filters.priceTo >= product.price) ||
      product.price==='Договорная' || product.price==='Бесплатно';
  const isCorrectStateFilter = filters.stateProduct==='Любое' || product.state === filters.stateProduct;
  const isCorrectSellerFilter = filters.seller==='Любой' || product.seller === filters.seller;
  const isCorrectWithPhoto = filters.isWithPhoto ? product.image : true;
  const isCorrectFashionableSummer = filters.fashionableSummer ? product.fashionableSummer : true;
  const isCorrectInstallmentHalva = filters.installmentHalva ? product.installmentHalva : true;
  const isCorrectIsExchange = filters.isExchange ? product.isExchange : true;

  return isCorrectLocationFilter && isCorrectPriceFilter && isCorrectStateFilter &&
      isCorrectSellerFilter && isCorrectWithPhoto && isCorrectFashionableSummer &&
      isCorrectInstallmentHalva && isCorrectIsExchange;
};
