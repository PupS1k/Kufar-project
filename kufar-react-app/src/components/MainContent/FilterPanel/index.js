import React, {PureComponent} from 'react';
import CategoriesFilter from './CategoriesFilter';
import LocationFilter from './LocationFilter';
import PriceFilter from './PriceFilter';
import SwitchFilter from './SwitchFilter';
import CheckboxFilter from './CheckboxFilter';
import {
  locations, stateFilter, sellerFilter, checkboxFilter, applyFilters
} from '../../../constants';

class FilterPanel extends PureComponent {
  state = {
    region: 'Область',
    city: 'Любой',
    priceFrom: '',
    priceTo: '',
    stateProduct: 'Любое',
    seller: 'Любой',
    isWithPhoto: false,
    fashionableSummer: false,
    installmentHalva: false,
    isExchange: false,
    correctProducts: this.props.products
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.correctProducts === this.state.correctProducts) {
      const {
        region, city, priceTo, priceFrom, stateProduct, seller, isWithPhoto,
        fashionableSummer, installmentHalva, isExchange
      } = this.state;
      const location = region + (city !== 'Любой' && city !== '' ? `, ${city}` : '');
      const correctProducts = this.props.products.filter(product => applyFilters({
        location,
        priceTo,
        priceFrom,
        stateProduct,
        seller,
        isWithPhoto,
        fashionableSummer,
        installmentHalva,
        isExchange
      },
      product));
      this.setState({correctProducts});
    }
  }


  handleRegion = (value) => {
    this.setState({region: value});
    this.setState({city: ''});
  };

  handleCity = (value) => {
    this.setState({city: value});
  };

  handlePriceFrom = value => this.setState({priceFrom: value});

  handlePriceTo = value => this.setState({priceTo: value});

  handleState = value => this.setState({stateProduct: value});

  handleSeller = value => this.setState({seller: value});

  handleWithPhoto = () => this.setState(({isWithPhoto}) => ({isWithPhoto: !isWithPhoto}));

  handleFashionableSummer = () => this
    .setState(({fashionableSummer}) => ({fashionableSummer: !fashionableSummer}));

  handleInstallmentHalva = () => this
    .setState(({installmentHalva}) => ({installmentHalva: !installmentHalva}));

  handleIsExchange = () => this
    .setState(({isExchange}) => ({isExchange: !isExchange}));


  handleFilters = () => {
    window.scrollTo(0, 0);
    this.props.handleProducts(this.state.correctProducts);
  };

  render() {
    const {correctProducts} = this.state;
    const cities = locations.find(location => location.region === this.state.region);
    return (
      <div className="filter-panel">
        <CategoriesFilter />
        <div className="other-filters-container">
          <LocationFilter
            id="list-region-filter"
            headline="ВСЯ БЕЛАРУСЬ"
            firstOption="Область"
            options={locations.map(location => location.region)}
            handleLocation={this.handleRegion}
          />
          <LocationFilter
            id="list-city-filter"
            headline="ГОРОД / РАЙОН"
            firstOption="Любой"
            options={cities && cities.city}
            disabled={this.state.region === 'Область'}
            handleLocation={this.handleCity}
          />
          <PriceFilter
            handlePriceFilterTo={this.handlePriceTo}
            handlePriceFilterFrom={this.handlePriceFrom}
          />
          <SwitchFilter
            headline="Состояние"
            classNameFilter="state-filter"
            typeSwitch="radio"
            nameRadioBtn="state"
            filters={stateFilter}
            handleSwitchFilter={this.handleState}
          />
          <SwitchFilter
            headline="ПРОДАВЕЦ"
            classNameFilter="seller-filter"
            typeSwitch="radio"
            nameRadioBtn="seller"
            filters={sellerFilter}
            handleSwitchFilter={this.handleSeller}
          />
          <CheckboxFilter
            classNameFilter="additional-modes"
            typeSwitch="checkbox"
            filters={checkboxFilter}
            handlesSwitchFilter={[
              this.handleFashionableSummer,
              this.handleInstallmentHalva,
              this.handleWithPhoto,
              this.handleIsExchange]}
          />
          <button type="button" className="btn--show-result" onClick={this.handleFilters}>
            Показать результаты({correctProducts.length})
          </button>
          <button type="button" className="btn--reset-filters">Сбросить фильтры</button>
          <button type="button" className="btn--save-search">Сохранить поиск</button>
        </div>
      </div>
    );
  }
}

export default FilterPanel;
