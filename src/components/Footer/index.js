import React from 'react';
import Button from '../Button';
import NavButtons from './Links/NavButtons';
import SocialLinks from './Links/SocialLinks';
import LinksApp from './Links/LinksApp';
import {
  additionalLinks, infoAboutSite, linksApp, paymentInfo, socialLinks
} from '../../constants';
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
    <p className="payment-info">{paymentInfo}</p>
    <p className="info-about-site">{infoAboutSite}</p>
    <div className="bot-part-of-foot">
      <LinksApp links={linksApp} />
      <SocialLinks links={socialLinks} />
    </div>
  </footer>
);

export default Footer;
