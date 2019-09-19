import React from 'react';
import Button from '../Button/Button';
import IconButton from '../Button/IconButton';
import switches from '../../images/switch.png';
import squares from '../../images/square4.png';

const MainContentBar = () => (
  <div className="main-content-bar">
    <div className="cup-of-mainpage__text">
      <p className="main-content-bar__txt headline">Kufar - площадка объявлений в Беларуси</p>
      <p className="main-content-bar__txt count-product">Объявлений: 2071428</p>
    </div>
    <div className="sortings-container">
      <select className="select-sortings">
        <option>По дате</option>
        <option>По цене ↑</option>
        <option>По цене ↓</option>
      </select>
      <div className="switches-display">
        <Button
          mode="secondary_green"
          className="btn_show-filters"
          label="Фильтры"
          labelSize="large"
          image={{
            iconSize: 'medium',
            icon: switches,
            alt: 'Switch'
          }}
        />
        <IconButton
          className="switch-display__btn"
          image={{
            iconSize: 'medium',
            icon: squares,
            alt: 'Square'
          }}
        />
      </div>
    </div>
  </div>
);

export default MainContentBar;
