import React from 'react';

const RadioField = ({ input, type, checked, text}) => (
  <label className="icon-label">
    <input
      {...input}
      className="icon-input"
      type={type}
      checked={checked}
    />
    <div className="icon-radio-btn" />
    <p>{text}</p>
  </label>
);

export default RadioField;
