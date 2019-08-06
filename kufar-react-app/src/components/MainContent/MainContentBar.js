import React from 'react';
import switches from "../../images/switch.png";
import squares from "../../images/square4.png";

const MainContentBar = () =>(
    <div className="main-content-bar">
      <div className="cup-of-mainpage__text">
        <p className="main-content-bar--txt headline">Kufar - площадка объявлений в Беларуси</p>
        <p className="main-content-bar--txt count-ad">Объявлений: 2071428</p>
      </div>
      <div className="sortings-container">
        <select className="list-sortings">
          <option>По дате</option>
          <option>По цене ↑</option>
          <option>По цене ↓</option>
        </select>
        <div className="switches-display">
          <button className="btn--show-filters">
            <img className="btn--show-filters--img switch-display--img" src={switches} alt="Switch"/>
            <p className="btn--show-filters--txt">Фильтры</p>
          </button>
          <button className="btn--switch-display">
            <img className="switch-display--img" src={squares} alt="Square"/>
          </button>
        </div>
      </div>
    </div>
);

export default MainContentBar;