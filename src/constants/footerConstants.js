import gistogram from '../images/gistogram.png';
import apple from '../images/apple.png';
import googlePlay from '../images/googlePlay.png';
import telegram from '../images/telegram.png';
import vk from '../images/vk.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import youtube from '../images/youtube.png';
import odnoklassniki from '../images/odnoklassniki.png';

const additionalLinks = [
  {
    image: gistogram,
    text: 'Реклама'
  },
  {text: 'Рассрочка'},
  {text: 'Доставка'},
  {text: 'Правила'},
  {text: 'Помощь'},
  {text: 'Выбрать регион'}
];
const linksApp = [{
  image: apple,
  text: 'Приложение Kufar в App Store'
}, {
  image: googlePlay,
  text: 'Приложение Kufar в Google Play'
}];
const socialLinks = [
  {image: telegram},
  {image: vk},
  {image: facebook},
  {image: instagram},
  {image: youtube},
  {image: odnoklassniki}
  ];

export {additionalLinks, socialLinks, linksApp};
