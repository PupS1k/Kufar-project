import React from 'react';

const Button = ({className, onClick, text, img, disabled}) => (
  <button
    type="button"
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {img && <img className={img.className} src={img.src} alt={img.alt}/>}
    {text && <p className={text.className}>{text.txt}</p>}
  </button>
);

export default Button;
