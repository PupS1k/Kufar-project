import React from 'react';

const Button = ({
    className, onClick, label, icon, status, labelSize, iconSize, disabled, alt, bold
  }) => {
  const classNameBtn = 'btn btn_' + status;
  const classNameIcon = 'btn__img btn__img_' + iconSize;
  const classNameText = 'btn__text_' + labelSize +(bold ? ' btn__text_'+ bold : '');
  return (
    <button
      type="button"
      className={className ? className + classNameBtn : classNameBtn}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <img className={classNameIcon} src={icon} alt={alt}/>}
      <p className={classNameText}>{label}</p>
    </button>
  );
};

export default Button;
