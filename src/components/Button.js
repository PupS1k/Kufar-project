import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    className, onClick, label, icon, status, labelSize, iconSize, disabled, alt, bold
  }) => {
  const classNameBtn = 'btn btn_' + status;
  const classNameIcon = 'btn__img btn__img_' + iconSize;
  const classNameText = 'btn__text_' + labelSize +(bold ? ' btn__text_bold' : '');
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

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelSize: PropTypes.string.isRequired,
  iconSize: PropTypes.string,
  status: PropTypes.string.isRequired,
  alt: PropTypes.string,
  bold: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.any
};

Button.defaultProps = {
  className: '',
  iconSize: '',
  alt: '',
  bold: false,
  disabled: false,
  onClick: () => {},
  icon: ''
};

export default Button;
