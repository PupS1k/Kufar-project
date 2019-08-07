import React, {PureComponent} from 'react';

class PriceFilter extends PureComponent {
  state = {
    priceTo: '',
    priceFrom: ''
  };

  handlePriceTo = (event) => {
    let price =  event.currentTarget.value;
    if(price < 0) price*=-1;
    this.setState({priceTo: price});
    this.props.handlePriceFilterTo(price);
  };
  handlePriceFrom = (event) => {
    let price = event.currentTarget.value;
    if(price < 0) price*=-1;
    this.setState({priceFrom: price});
    this.props.handlePriceFilterFrom(price);
  };

  render(){
    return(
        <div className="price-filter">
          <label className="label-input" htmlFor="price-filters-from">ЦЕНА</label>
          <div>
            <input
                className="price-filter--input"
                id="price-filter-from"
                placeholder="От"
                type="number"
                value={this.state.priceFrom}
                onChange={this.handlePriceFrom}
                min="0"
                step="0.01"
            />
            <input
                className="price-filter--input"
                id="price-filter-to"
                placeholder="До"
                type="number"
                onChange={this.handlePriceTo}
                value={this.state.priceTo}
                min="0"
                step="0.01"
            />
          </div>
        </div>
    )
  }
}

export default PriceFilter;