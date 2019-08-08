import React, {PureComponent} from 'react';

class RegionFilter extends PureComponent {
  handleOption = event => this.props.handleLocation(event.currentTarget.value);

  render() {
    const {
      id, headline, options, disabled
    } = this.props;
    return (
      <div className="location-filter">
        <label className="label-input" htmlFor={id}>{headline}</label>
        <select id={id} onClick={this.handleOption} disabled={disabled}>
          {options.map(option => (<option>{option}</option>))}
        </select>
      </div>
    );
  }
}

export default RegionFilter;
