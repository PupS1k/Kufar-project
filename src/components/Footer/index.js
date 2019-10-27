import React from 'react';
import Button from '../Button';
import NavButtons from './Links/NavButtons';
import SocialLinks from './Links/SocialLinks';
import LinksApp from './Links/LinksApp';
import {additionalLinks, linksApp, socialLinks} from '../../constants';
import earth from '../../images/earth.png';
import './style.css';

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
      <SocialLinks links={socialLinks} />
    </div>
  </footer>
);

export default Footer;
