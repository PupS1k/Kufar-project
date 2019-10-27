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
  href: 'https://apps.apple.com/by/app/kufar-besplatnye-ob-avlenia/id1149312972',
  image: apple,
  text: 'Приложение Kufar в App Store'
}, {
  href: 'https://play.google.com/store/apps/details?id=se.scmv.belarus',
  image: googlePlay,
  text: 'Приложение Kufar в Google Play'
}];
export const socialLinks = [
  {
    href: 'https://t.me/spasiboKufar',
    icon: telegram,
    alt: 'Telegram'
  },
  {
    href: 'https://vk.com/kufar.official',
    icon: vk,
    alt: 'Vk'
  },
  {
    href: 'https://www.facebook.com/kufar.official/?fref=ts',
    icon: facebook,
    alt: 'Facebook'
  },
  {
    href: 'https://www.instagram.com/kufar.official/',
    icon: instagram,
    alt: 'Instagram'
  },
  {
    href: 'https://www.youtube.com/channel/UCSc8YunZJe-wkf5rQ3P4cXA',
    icon: youtube,
    alt: 'Youtube'
  },
  {
    href: 'https://ok.ru/kufar.by',
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

export const checkboxFilter = [{name: 'Модное лето'}, {name: 'Рассорчка по халве'},
  {name: 'Только с фото'}, {name: 'Возможен обмен'}];

export const checkboxProduct = [{name: 'Модное лето'}, {name: 'Рассорчка по халве'}, {name: 'Возможен обмен'}];

export const categories = ['Все категории', 'Модное лето', 'Недвижимость', 'Авто и транспорт', 'Техника',
  'Мода и стиль', 'Все для детей и мам', 'Все для дома', 'Ремонт и стройка', 'Сад и огород',
  'Хобби, спорт и туризм', 'Свадьба и праздники', 'Животные', 'Работа, бизнес, учеба', 'Услуги', 'Прочее'];
