import React from 'react';
import logo from '../../images/logo.png';
import kufar from '../../images/kufar.png';
import search from '../../images/search.png';
import locationHeader from '../../images/locationHeader.png';
import Button from './Button';
import plus from '../../images/plus.png';
import './style.css';

const Header = () => (
  <header>
    <div className="left-part-of-header">
      <div className="logo-container">
        <img className="logo-img logo-icon" src={logo} alt="Logo" />
        <img className="logo-img logo-text" src={kufar} alt="Logo" />
      </div>
      <div className="search-field-container">
        <label htmlFor="search-field" tabIndex="0">
          <img className="img--loupe" src={search} alt="Search" />
        </label>
        <input id="search-field" type="text" placeholder="Товар, услуга" />
      </div>
      <button type="button" className="btn--location">
        <img className="img--marker" src={locationHeader} alt="Location" />
        <p>Вся Беларусь</p>
      </button>
    </div>
    <div className="right-part-of-header">
      <button className="btn--add-product">
        <img className="img--plus" src={plus} alt="Plus" />
        <p className="btn--add-ad__text btn--add-product__text-full">Подать объявление</p>
        <p className="btn--add-ad__text btn--add-product__text-reduction">Объявление</p>
      </button>
      <Button />

    </div>
  </header>
);

export default Header;
