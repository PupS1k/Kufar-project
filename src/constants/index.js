import gistogram from '../images/gistogram.png';
import apple from '../images/apple.png';
import googlePlay from '../images/googlePlay.png';
import telegram from '../images/telegram.png';
import vk from '../images/vk.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import youtube from '../images/youtube.png';
import odnoklassniki from '../images/odnoklassniki.png';

export const additionalLinks = [
  {
    image: {
      iconSize: 'large',
      icon: gistogram,
      alt: 'Gistogram'
    },
    text: 'Реклама'
  },
  {text: 'Рассрочка'},
  {text: 'Доставка'},
  {text: 'Правила'},
  {text: 'Помощь'},
  {text: 'Выбрать регион'}
];
export const linksApp = [{
  image: apple,
  text: 'Приложение Kufar в App Store'
}, {
  image: googlePlay,
  text: 'Приложение Kufar в Google Play'
}];
export const socialLinks = [
  {
    icon: telegram,
    alt: 'Telegram'
  },
  {
    icon: vk,
    alt: 'Vk'
  },
  {
    icon: facebook,
    alt: 'Facebook'
  },
  {
    icon: instagram,
    alt: 'Instagram'
  },
  {
    icon: youtube,
    alt: 'Youtube'
  },
  {
    icon: odnoklassniki,
    alt: 'Odnoklassniki'
  }
];


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

export const checkboxProduct = [{name: 'Модное лето'}, {name: 'Рассорчка по халве'}, {name: 'Возможен обмен'}];

export const categories = ['Все категории', 'Модное лето', 'Недвижимость', 'Авто и транспорт', 'Техника',
  'Мода и стиль', 'Все для детей и мам', 'Все для дома', 'Ремонт и стройка', 'Сад и огород',
  'Хобби, спорт и туризм', 'Свадьба и праздники', 'Животные', 'Работа, бизнес, учеба', 'Услуги', 'Прочее'];

export const location = (region, city) => region + (city !== 'Любой' && city !== '' ? `, ${city}` : '');

export const formatDate = (date) => {
  const monthNames = [
    'Январь', 'Февраль', 'Март',
    'Апрель', 'Май', 'Июнь', 'Июль',
    'Август', 'Сентябрь', 'Октябрь',
    'Ноябрь', 'Декабрь'
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day} ${monthNames[monthIndex]} ${year}, ${hours}:${minutes}`;
};

export const applyFilters = (filters, product) => {
  const isCorrectLocationFilter = product.location.includes(filters.location) || filters.location === 'Область';
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

export const fetchReq = (url, options) => fetch(`http://localhost:3000/${url}`, options)
  .then((res) => {
    if (!res.ok) throw new Error(res.statusText);
    return res;
  })
  .then(res => res.json())
  .catch(err => console.log(err));
