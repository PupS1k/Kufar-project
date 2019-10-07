import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.css';

const Button = ({
  className, onClick, label, image, mode, labelSize, disabled, bold, type
}) => (
  <button
    type={type}
    className={classNames(className, `btn btn_${mode}`)}
    onClick={onClick}
    disabled={disabled}
  >
    <div className="btn__items">
      {image && (
      <img
        className={classNames('btn__img', `btn__img_${image.iconSize}`)}
        src={image.icon}
        alt={image.alt}
      />
      )}
      <p className={classNames(`btn__text_${labelSize}`, {btn__text_bold: bold})}>{label}</p>
    </div>
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelSize: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  bold: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  image: PropTypes.shape({
    icon: PropTypes.any,
    alt: PropTypes.string,
    iconSize: PropTypes.string
  })
};

Button.defaultProps = {
  type: 'button',
  className: '',
  bold: false,
  disabled: false,
  onClick: () => {},
  image: null
};

export default Button;
