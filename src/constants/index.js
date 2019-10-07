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
