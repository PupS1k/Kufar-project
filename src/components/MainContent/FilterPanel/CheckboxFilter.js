import React, {PureComponent} from 'react';

class CheckboxFilter extends PureComponent {
  handleSwitch = handle => () => handle();

  render() {
    const {
      headline, classNameFilter, typeSwitch, nameRadioBtn, filters, handlesSwitchFilter
    } = this.props;

    return (
      <div>
        {headline && <p className="label-input">{headline}</p>}
        <div className={classNameFilter}>
          {filters.map((filter, index) => (
            <label key={filter.name} className="icon-label">
              <input
                className="icon-input"
                type={typeSwitch}
                value={filter.name}
                onChange={this.handleSwitch(handlesSwitchFilter[index])}
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

export default CheckboxFilter;
