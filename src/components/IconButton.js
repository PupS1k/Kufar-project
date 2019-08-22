import React from 'react';

const IconButton = ({className, onClick, icon, iconSize, border, disabled, alt}) => (
  <button
    type="button"
    className={(className ? className +' icon-btn' : ' icon-btn')+ (border ? ' icon-btn_border' : '')}
    onClick={onClick}
    disabled={disabled}
  >
    <img className={'icon-btn__img_'+iconSize} src={icon} alt={alt}/>
  </button>
);

export default IconButton;
