import React from 'react';
import gistogram from '../../images/gistogram.png';
import earth from '../../images/earth.png';
import apple from '../../images/apple.png';
import googlePlay from '../../images/googlePlay.png';
import telegram from '../../images/telegram.png';
import vk from '../../images/vk.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import youtube from '../../images/youtube.png';
import odnoklassniki from '../../images/odnoklassniki.png';
import './style.css';
import Button from '../Button';

const Footer = () => (
  <footer>
    <div className="top-part-of-foot">
      <div className="list-additional-links">
        <a className="additional-link link-advertising">
          <img className="img--gistogram" src={gistogram} alt="Gistogram" />
          <p>Реклама</p>
        </a>
        <a className="additional-link">Рассрочка</a>
        <a className="additional-link">Доставка</a>
        <a className="additional-link">Правила</a>
        <a className="additional-link">Помощь</a>
        <a className="additional-link">Выбрать регион</a>
      </div>
      <Button
        className="btn-change-language"
        text={{txt: 'Беларуская'}}
        img={{className: 'btn-change-language--img', src: earth, alt: 'Earth'}}
      />
    </div>
    <p className="payment-info">*Оплата производится в белорусских рублях по курсу НБ РБ.</p>
    <p className="info-about-site">© Kufar — крупнейшая площадка объявлений Беларуси по данным
      gemiusAudience, апрель 2019. Использование ресурса Kufar означает согласие с Пользовательским
      соглашением и Политикой конфиденциальности. ООО «Адевинта», УНП 191767445, 220030, г. Минск,
      ул. Немига, 5, помещение 77. Режим работы: 10.00 - 18.00, Пн-Пт.
    </p>
    <div className="bot-part-of-foot">
      <div className="links-app-container">
        <a className="link-app">
          <img className="link-app--img" src={apple} alt="Apple" />
          <p className="link-app--text">Приложение Kufar в App Store</p>
        </a>
        <a className="link-app">
          <img className="link-app--img" src={googlePlay} alt="Google Play" />
          <p className="link-app--text">Приложение Kufar в Google Play</p>
        </a>
      </div>
      <div className="links-social-network">
        <a className="link-social-network">
          <img className="link-social-network--img" src={telegram} alt="Telegram" />
        </a>
        <a className="link-social-network">
          <img className="link-social-network--img" src={vk} alt="Vk" />
        </a>
        <a className="link-social-network">
          <img className="link-social-network--img" src={facebook} alt="Facebook" />
        </a>
        <a className="link-social-network">
          <img className="link-social-network--img" src={instagram} alt="Instagram" />
        </a>
        <a className="link-social-network">
          <img className="link-social-network--img" src={youtube} alt="Youtube" />
        </a>
        <a className="link-social-network">
          <img className="link-social-network--img" src={odnoklassniki} alt="Odnoklassniki" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
