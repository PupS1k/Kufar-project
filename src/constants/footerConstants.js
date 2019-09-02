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
const linksApp = [{
  image: apple,
  text: 'Приложение Kufar в App Store'
}, {
  image: googlePlay,
  text: 'Приложение Kufar в Google Play'
}];
const socialLinks = [
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

export {additionalLinks, socialLinks, linksApp};
