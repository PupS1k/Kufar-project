import React from 'react';
import PropTypes from 'prop-types';

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

IconButton.propTypes = {
  className: PropTypes.string,
  iconSize: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  border: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.any.isRequired
};

IconButton.defaultProps = {
  className: '',
  border: false,
  disabled: false,
  onClick: () => {}
};

export default IconButton;
