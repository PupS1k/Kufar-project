import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.css';


const IconButton = ({
  className, onClick, border, disabled, image
}) => (
  <button
    type="button"
    className={classNames('icon-btn', className, {'icon-btn_border': border})}
    onClick={onClick}
    disabled={disabled}
  >
    <img className={`icon-btn__img_${image.iconSize}`} src={image.icon} alt={image.alt} />
  </button>
);

IconButton.propTypes = {
  className: PropTypes.string,
  border: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  image: PropTypes.shape({
    icon: PropTypes.any,
    alt: PropTypes.string,
    iconSize: PropTypes.string
  }).isRequired
};

IconButton.defaultProps = {
  className: '',
  border: false,
  disabled: false,
  onClick: () => {}
};

export default IconButton;
