import React from 'react';
import lines from "../../images/lines.png";
import shirt from "../../images/shirt.png";
import './style.css';


const Navigation = () =>(
    <nav className="navigation">
      <button className="btn--all-categories">
        <img className="btn--all-categories__img" src={lines} alt="Lines"/>
        <p className="btn--all-categories__text">Категории</p>
      </button>
      <div className="scroll-panel-nav">
        <a className="nav--category">
          <img className="nav-img--skirt" src={shirt} alt="Shirt"/>
          <p>Модное лето</p>
        </a>
        <a className="nav--category">Техника с доставкой</a>
        <a className="nav--category">Телефоны</a>
        <a className="nav--category">Недвижимость</a>
        <a className="nav--category">Легковые авто</a>
        <a className="nav--category">Велосипеды</a>
        <a className="nav--category">Работа</a>
        <a className="nav--category">Платья</a>
        <a className="nav--category">Строительный инструмент</a>
        <a className="nav--category">Садовая техника</a>
        <a className="nav--category">Запчасти,расходники</a>
        <a className="nav--category">Коляски</a>
        <a className="nav--category">Диваны</a>
        <a className="nav--category">Холодильники</a>
      </div>
      <div className="scroll-panel-btn">
        <button className="scroll-btn scroll-panel-btn--left"/>
        <button className="scroll-btn scroll-panel-btn--right"/>
      </div>
    </nav>
);

export default Navigation;
