import React from 'react';
import './style.css';

const SelectField = ({
  handleLocation, id, headline, firstOption, options, disabled
}) => {
  const handleOption = event => handleLocation(event.currentTarget.value);

  return (
    <div className="select-field">
      <label className="label-input" htmlFor={id}>{headline}</label>
      <select id={id} onClick={handleOption} disabled={disabled}>
        {firstOption && <option>{firstOption}</option>}
        {options && options.map(option => (<option key={option}>{option}</option>))}
      </select>
    </div>
  );
};


export default SelectField;
