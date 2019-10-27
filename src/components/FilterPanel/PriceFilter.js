import React from 'react';

const PriceFilter = (props) => {
  const handlePriceTo = (event) => {
    try {
      let price = event.currentTarget.value;
      if (price < 0) price *= -1;
      if (price.length > 1) {
        if (price[0] === '0') delete price[0];
      }
      props.handlePriceTo(price);
    } catch (err) {
      console.error('Not a number');
    }
  };

  const handlePriceFrom = (event) => {
    try {
      let price = event.currentTarget.value;
      if (price < 0) price *= -1;
      if (price.length > 1) {
        if (price[0] === '0') delete price[0];
      }
      props.handlePriceFrom(price);
    } catch (err) {
      console.error('Not a number');
    }
  };

  const {priceTo, priceFrom} = props;
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
          onChange={handlePriceFrom}
          min="0"
          step="0.01"
        />
        <input
          className="input-price"
          id="price-filter-to"
          placeholder="До"
          type="number"
          onChange={handlePriceTo}
          value={priceTo}
          min="0"
          step="0.01"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
