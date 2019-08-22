import React from 'react';
import Button from '../Button';
import lines from "../../images/lines.png";
import shirt from "../../images/shirt.png";
import './style.css';
import IconButton from '../IconButton';
import arrow from '../../images/arrow.png';

const navBtn = ['Техника с доставкой', 'Телефоны', 'Недвижимость', 'Легковые авто', 'Велосипеды',
  'Работа', 'Платья', 'Строительный инструмент', 'Садовая техника', 'Запчасти,расходники',
'Коляски', 'Диваны', 'Холодильники'];

const Navigation = () =>(
    <nav className="navigation">
      <Button
        status="default_blue"
        icon={lines}
        alt="Lines"
        label="Категории"
        labelSize="large"
        iconSize="primary"
        bold={true}
      />
      <div className="scroll-panel-nav">
        <Button
          className="nav--category "
          icon={shirt}
          alt="Shirt"
          label="Модное лето"
          iconSize="primary"
          labelSize="large"
          status="default"
        />
        {navBtn.map(text => (
          <Button
            key={text}
            className="nav--category "
            status="default"
            label={text}
            labelSize="large"
          />
        ))}
      </div>
      <div className="scroll-panel-btn">
        <IconButton
          className="scroll-panel-btn--left"
          iconSize="primary"
          icon={arrow}
          alt="Arrow"
        />
        <IconButton
          className="scroll-panel-btn--right"
          iconSize="primary"
          icon={arrow}
          alt="Arrow"
        />
      </div>
    </nav>
);

export default Navigation;
