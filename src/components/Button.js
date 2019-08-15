import React from 'react';

const Button = ({className, onClick, children, disabled}) => (
  <button
    type="button"
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
