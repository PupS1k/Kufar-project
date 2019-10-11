import React, {PureComponent} from 'react';
import {guid} from '../../utils';
import './style.css';

class SwitchList extends PureComponent {
  handleSwitch = event => this.props.handleSwitchFilter(event.currentTarget.value);

  render() {
    const {
      headline, classNameFilter, nameRadioBtn, filters, handleSwitchFilter
    } = this.props;

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
                onChange={handleSwitchFilter && this.handleSwitch}
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
  }
}

export default SwitchList;
