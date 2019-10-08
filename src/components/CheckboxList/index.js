import React, {PureComponent} from 'react';
import {guid} from '../../utils';
import './style.css';

class CheckboxList extends PureComponent {

  render() {
    const {
      headline, classNameFilter,
      filters, handlesSwitchFilter
    } = this.props;
    return (
      <div>
        {headline && <p className="label-input">{headline}</p>}
        <div className={classNameFilter}>
          {filters.map((filter, index) => (
            <label key={guid()} className="icon-label">
              <input
                className="icon-input"
                type="checkbox"
                value={filter.name}
                onChange={handlesSwitchFilter[index]}
                name={filter.name}
              />
              <div className="icon-checkbox-btn" />
              <p>{filter.name}</p>
            </label>
          ))}
        </div>
      </div>
    )
  }
}


export default CheckboxList;
