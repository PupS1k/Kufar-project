import React from 'react';
import classNames from 'classnames';
import {guid} from '../../utils';
import './style.css';

const SwitchList = ({
  headline, classNameFilter, nameRadioBtn, filters, checked, handleSwitchFilter
}) => {
  const handleSwitch = event => handleSwitchFilter(event.currentTarget.value);
  return (
    <div>
      {headline && <p className="label-input">{headline}</p>}
      <div className={classNameFilter}>
        {filters.map(filter => (
          <label key={guid()} className="icon-label">
            <input
              className={classNames('icon-input', {'radio-checked': filter.name === checked})}
              type="radio"
              value={filter.name}
              onChange={handleSwitch}
              defaultChecked={filter.name === checked}
              name={nameRadioBtn}
            />
            <div className="icon-radio-btn" />
            <p>{filter.name}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SwitchList;
