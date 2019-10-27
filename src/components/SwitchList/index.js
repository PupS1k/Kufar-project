import React, {memo} from 'react';
import {guid} from '../../utils';
import './style.css';

const SwitchList = ({
  headline, classNameFilter, nameRadioBtn, filters, handleSwitchFilter
}) => {
  const handleSwitch = event => handleSwitchFilter(event.currentTarget.value);

  return (
    <div>
      {headline && <p className="label-input">{headline}</p>}
      <div className={classNameFilter}>
        {filters.map(filter => (
          <label key={guid()} className="icon-label">
            <input
              className="icon-input"
              type="radio"
              value={filter.name}
              onChange={handleSwitch}
              defaultChecked={filter.checked}
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


export default memo(SwitchList);
