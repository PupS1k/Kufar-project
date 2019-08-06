import React from 'react';

const SwitchFilter = ({headline, classNameFilter, typeSwitch, nameRadioBtn, filters}) => (
    <div>
      {headline && <p className="label-input">{headline}</p>}
      <div className={classNameFilter}>
        {filters.map( filter => (
            <label className="icon-label">
              <input
                  className="icon-input"
                  type={typeSwitch}
                  defaultChecked={filter.checked}
                  name={nameRadioBtn || filter.name}/>
              <div className={`icon-${typeSwitch}-btn`}/>
              <p>{filter.name}</p>
            </label>
        ))}
      </div>
    </div>
);

export default SwitchFilter;