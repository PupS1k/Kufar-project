import React from 'react';
import guid from '../../utils';
import './style.css';

const CheckboxList = ({
  headline, classNameFilter, typeSwitch,
  nameRadioBtn, filters, handlesSwitchFilter
}) => (
  <div>
    {headline && <p className="label-input">{headline}</p>}
    <div className={classNameFilter}>
      {filters.map((filter, index) => (
        <label key={guid()} className="icon-label">
          <input
            className="icon-input"
            type={typeSwitch}
            value={filter.name}
            onChange={handlesSwitchFilter[index]}
            defaultChecked={filter.checked}
            name={nameRadioBtn || filter.name}
          />
          <div className={`icon-${typeSwitch}-btn`} />
          <p>{filter.name}</p>
        </label>
      ))}
    </div>
  </div>
);


export default CheckboxList;
