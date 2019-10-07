import React, {PureComponent} from 'react';
import guid from '../../utils';
import './style.css';

class SwitchList extends PureComponent {
  handleSwitch = event => this.props.handleSwitchFilter(event.currentTarget.value);

  render() {
    const {
      headline, classNameFilter, typeSwitch, nameRadioBtn, filters, handleSwitchFilter
    } = this.props;

    return (
      <div>
        {headline && <p className="label-input">{headline}</p>}
        <div className={classNameFilter}>
          {filters.map(filter => (
            <label key={guid()} className="icon-label">
              <input
                className="icon-input"
                type={typeSwitch}
                value={filter.name}
                onChange={handleSwitchFilter && this.handleSwitch}
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
  }
}

export default SwitchList;
