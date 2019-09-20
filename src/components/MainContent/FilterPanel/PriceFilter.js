import React, {PureComponent} from 'react';

class PriceFilter extends PureComponent {
  handlePriceTo = (event) => {
    try {
      let price = event.currentTarget.value;
      if (price < 0) price *= -1;
      if (price.length > 1) {
        if (price[0] === '0') delete price[0];
      }
      this.props.handlePriceTo(price);
    } catch (err) {
      console.error('Not a number');
    }
  };

  handlePriceFrom = (event) => {
    try {
      let price = event.currentTarget.value;
      if (price < 0) price *= -1;
      if (price.length > 1) {
        if (price[0] === '0') delete price[0];
      }
      this.props.handlePriceFrom(price);
    } catch (err) {
      console.error('Not a number');
    }
  };

  render() {
    const {priceTo, priceFrom} = this.props;
    return (
      <div className="price-filter">
        <label className="label-input" htmlFor="price-filters-from">ЦЕНА</label>
        <div>
          <input
            className="input-price"
            id="price-filter-from"
            placeholder="От"
            type="number"
            value={priceFrom}
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
            value={priceTo}
            min="0"
            step="0.01"
          />
        </div>
      </div>
    );
  }
}

export default PriceFilter;
