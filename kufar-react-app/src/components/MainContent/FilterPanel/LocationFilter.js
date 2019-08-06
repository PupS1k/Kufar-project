import React from 'react';

const LocationFilter = ({id, headline, options, disabled}) => (
    <div className="location-filter">
      <label className="label-input" htmlFor={id}>{headline}</label>
      <select id={id} disabled={disabled}>
        {options.map(option => (<option>{option}</option>))}
      </select>
    </div>
);

export default LocationFilter;