import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getPriceFrom, getPriceTo} from '../../../selectors/filters';
import {changePriceTo, changePriceFrom} from '../../../actions/filters';

class PriceFilter extends PureComponent {
  handlePriceTo = (event) => {
    let price = event.currentTarget.value;
    if (price < 0) price *= -1;
    this.props.changePriceTo(price);
  };

  handlePriceFrom = (event) => {
    let price = event.currentTarget.value;
    if (price < 0) price *= -1;
    this.props.changePriceFrom(price);
  };

  render() {
    return (
      <div className="price-filter">
        <label className="label-input" htmlFor="price-filters-from">ЦЕНА</label>
        <div>
          <input
            className="input-price"
            id="price-filter-from"
            placeholder="От"
            type="number"
            value={this.props.priceFrom}
            onChange={this.handlePriceFrom}
            min="0"
            step="0.01"
          />
          <input
            className="input-price"
            id="price-filter-to"
            placeholder="До"
            type="number"
            onChange={this.handlePriceTo}
            value={this.props.priceTo}
            min="0"
            step="0.01"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  priceTo: getPriceTo(state),
  priceFrom: getPriceFrom(state)
});

export default connect(mapStateToProps, {changePriceTo, changePriceFrom})(PriceFilter);
