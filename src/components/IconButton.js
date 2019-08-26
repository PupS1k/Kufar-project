import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({className, onClick, border, disabled, image}) => (
  <button
    type="button"
    className={(className ? className +' icon-btn' : ' icon-btn')+ (border ? ' icon-btn_border' : '')}
    onClick={onClick}
    disabled={disabled}
  >
    <img className={'icon-btn__img_'+image.iconSize} src={image.icon} alt={image.alt}/>
  </button>
);

IconButton.propTypes = {
  className: PropTypes.string,
  border: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  image: PropTypes.shape({icon: PropTypes.any,
    alt: PropTypes.string, iconSize: PropTypes.string}).isRequired
};

IconButton.defaultProps = {
  className: '',
  border: false,
  disabled: false,
  onClick: () => {}
};

export default IconButton;
