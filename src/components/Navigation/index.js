import React from 'react';
import Button from '../Button';
import lines from '../../images/lines.png';
import shirt from '../../images/shirt.png';
import './style.css';
import IconButton from '../IconButton';
import arrow from '../../images/arrow.png';

const navBtn = ['Техника с доставкой', 'Телефоны', 'Недвижимость', 'Легковые авто', 'Велосипеды',
  'Работа', 'Платья', 'Строительный инструмент', 'Садовая техника', 'Запчасти,расходники',
  'Коляски', 'Диваны', 'Холодильники'];

const Navigation = () => (
  <nav className="navigation">
    <Button
      className="btn_category_primary"
      mode="default_blue"
      label="Категории"
      labelSize="large"
      bold
      image={{
        iconSize: 'large',
        icon: lines,
        alt: 'Lines'
      }}
    />
    <div className="scroll-panel-nav">
      <Button
        className="nav-category"
        label="Модное лето"
        labelSize="large"
        mode="default"
        image={{
          iconSize: 'large',
          icon: shirt,
          alt: 'Shirt'
        }}
      />
      {navBtn.map(text => (
        <Button
          key={text}
          className="nav-category"
          mode="default"
          label={text}
          labelSize="large"
        />
      ))}
    </div>
    <div className="scroll-panel">
      <IconButton
        className="scroll-panel__btn_left"
        image={{
          iconSize: 'large',
          icon: arrow,
          alt: 'Arrow'
        }}
      />
      <IconButton
        className="scroll-panel__btn_right"
        image={{
          iconSize: 'large',
          icon: arrow,
          alt: 'Arrow'
        }}
      />
    </div>
  </nav>
);

export default Navigation;
