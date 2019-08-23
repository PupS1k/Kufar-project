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
import IconButton from '../IconButton';

const additonalLink = ['Рассрочка', 'Доставка', 'Правила', 'Помощь', 'Выбрать регион'];

const Footer = () => (
  <footer>
    <div className="top-part-of-foot">
      <div className="list-additional-links">
        <Button
          className="additional-link "
          status="default"
          icon={gistogram}
          alt="Gistogram"
          iconSize="primary"
          labelSize="medium"
          label="Реклама"
        />
        {additonalLink.map(text => (
          <Button
            key={text}
            className="additional-link "
            status="default"
            labelSize="medium"
            label={text}
          />
        ))}
      </div>
      <Button
        status="secondary_gray"
        className="btn-change-language "
        label="Беларуская"
        icon={earth}
        alt="Earth"
        iconSize="medium"
        labelSize="large"
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
          <img className="link-app__img" src={apple} alt="Apple" />
          <p className="link-app__text">Приложение Kufar в App Store</p>
        </a>
        <a className="link-app">
          <img className="link-app__img" src={googlePlay} alt="Google Play" />
          <p className="link-app__text">Приложение Kufar в Google Play</p>
        </a>
      </div>
      <div className="links-social-network">
        <IconButton
          iconSize="default"
          icon={telegram}
          alt="Telegram"
        />
        <IconButton
          iconSize="default"
          icon={vk}
          alt="Vk"
        />
        <IconButton
          iconSize="default"
          icon={facebook}
          alt="Facebook"
        />
        <IconButton
          iconSize="default"
          icon={instagram}
          alt="Instagram"
        />
        <IconButton
          iconSize="default"
          icon={youtube}
          alt="Youtube"
        />
        <IconButton
          iconSize="default"
          icon={odnoklassniki}
          alt="Odnoklassniki"
        />
      </div>
    </div>
  </footer>
);

export default Footer;
