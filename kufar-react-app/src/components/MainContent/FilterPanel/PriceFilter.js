import React from 'react';

const PriceFilter = () => (
    <div className="price-filter">
      <label className="label-input" htmlFor="price-filters-from">ЦЕНА</label>
      <div>
        <input className="price-filter--input" id="price-filter-from" placeholder="От" type="number"
               min="0" step="0.01"/>
        <input className="price-filter--input" id="price-filter-to" placeholder="До" type="number"
               min="0" step="0.01"/>
      </div>
    </div>
);

export default PriceFilter;