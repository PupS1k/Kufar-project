import React, {PureComponent} from 'react';

class LocationFilter extends PureComponent {
  handleOption = event => this.props.handleLocation(event.currentTarget.value);

  render() {
    const {
      id, headline, firstOption, options, disabled
    } = this.props;
    return (
      <div className="location-filter">
        <label className="label-input" htmlFor={id}>{headline}</label>
        <select id={id} onClick={this.handleOption} disabled={disabled}>
          <option>{firstOption}</option>
          {options && options.map(option => (<option key={option}>{option}</option>))}
        </select>
      </div>
    );
  }
}

export default LocationFilter;