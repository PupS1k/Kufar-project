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
import NavButtons from './Links/NavButtons';
import {additionalLinks, linksApp, socialLinks} from '../../constants/footerConstants';
import SocialLinks from './Links/SocialLinks';
import LinksApp from './Links/LinksApp';

const additonalLink = ['Рассрочка', 'Доставка', 'Правила', 'Помощь', 'Выбрать регион'];

const Footer = () => (
  <footer>
    <div className="top-part-of-foot">
      <NavButtons labels={additionalLinks} />
      <Button
        mode="secondary_gray"
        className="btn-change-language"
        label="Беларуская"
        labelSize="large"
        image={{
          iconSize: 'medium',
          icon: earth,
          alt: 'Earth'
        }}
      />
    </div>
    <p className="payment-info">*Оплата производится в белорусских рублях по курсу НБ РБ.</p>
    <p className="info-about-site">© Kufar — крупнейшая площадка объявлений Беларуси по данным
      gemiusAudience, апрель 2019. Использование ресурса Kufar означает согласие с Пользовательским
      соглашением и Политикой конфиденциальности. ООО «Адевинта», УНП 191767445, 220030, г. Минск,
      ул. Немига, 5, помещение 77. Режим работы: 10.00 - 18.00, Пн-Пт.
    </p>
    <div className="bot-part-of-foot">
      <LinksApp links={linksApp} />
      <SocialLinks images={socialLinks} />
    </div>
  </footer>
);

export default Footer;
