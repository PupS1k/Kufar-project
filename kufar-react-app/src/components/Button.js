import React, {Component} from "react";
import plus from "../images/plus.png";

const Button = () => (
    <div className="right-part-of-cup">
      <button className="btn--add-ad">
        <img className="img--plus" src={plus} alt="Plus"/>
        <p className="btn--add-ad__text btn--add-ad__text-full">Подать объявление</p>
        <p className="btn--add-ad__text btn--add-ad__text-reduction">Объявление</p>
      </button>
      <button className="btn--log-In">Вход</button>
    </div>
);

export default Button;