import React from 'react';

const InputField = ({
  name, value, fieldError, type, handleInput, placeholder, other
}) => (
  <div className="input-field">
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleInput}
      placeholder={placeholder}
      error={fieldError && 'err'}
      {...other}
    />
    {fieldError && <span>{fieldError}</span>}
  </div>
);

export default InputField;
