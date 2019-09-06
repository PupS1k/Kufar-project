import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import CategoryFilter from './CategoryFilter';
import LocationFilter from './LocationFilter';
import PriceFilter from './PriceFilter';
import SwitchFilter from './SwitchFilter';
import CheckboxFilter from './CheckboxFilter';
import Button from '../../Button';
import {
  locations, stateFilter, sellerFilter, checkboxFilter, applyFilters
} from '../../../constants/filters';
import {getProductsByCategory} from '../../../selectors/products';
import {changeProducts, changeCategoriesFilter} from '../../../actions/products';
import './style.css';

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
    products: []
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.products === this.state.products) {
      const {products} = this.props;
      if (products) {
        const correctProducts = products
          .filter(product => applyFilters({
            location: this.state.region
             + (this.state.city !== 'Любой' && this.state.city !== '' ? `, ${this.state.city}` : ''),
            priceFrom: this.state.priceFrom,
            priceTo: this.state.priceTo,
            stateProduct: this.state.stateProduct,
            seller: this.state.seller,
            isWithPhoto: this.state.isWithPhoto,
            fashionableSummer: this.state.fashionableSummer,
            installmentHalva: this.state.installmentHalva,
            isExchange: this.state.isExchange
          },
          product));
        this.handleProducts(correctProducts);
      }
    }
  }

  handleFilters = () => {
    window.scrollTo(0, 0);
    this.props.changeProducts(this.state.products);
  };

  handleProducts = value => this.setState({products: value});

  handleRegion = value => this.setState({region: value});

  handleCity = value => this.setState({city: value});

  handlePriceFrom = value => this.setState({priceFrom: value});

  handlePriceTo = value => this.setState({priceTo: value});

  handleStateProduct = value => this.setState({stateProduct: value});

  handleSeller = value => this.setState({seller: value});

  handleIsWithPhoto = () => this.setState(({isWithPhoto}) => ({isWithPhoto: !isWithPhoto}));

  handleFashionableSummer = () => this.setState(({fashionableSummer}) => (
    {fashionableSummer: !fashionableSummer}));

  handleInstallmentHalva = () => this.setState(({installmentHalva}) => (
    {installmentHalva: !installmentHalva}));

  handleIsExchange = () => this.setState(({isExchange}) => ({isExchange: !isExchange}));

  render() {
    const {products, priceTo, priceFrom} = this.state;
    const cities = locations.find(location => location.region === this.state.region);
    return (
      <div className="filter-panel">
        <CategoryFilter handleCategoryFilter={this.props.changeCategoriesFilter} />
        <div className="other-filters-container">
          <LocationFilter
            id="select-region"
            headline="ВСЯ БЕЛАРУСЬ"
            firstOption="Область"
            options={locations.map(location => location.region)}
            handleLocation={this.handleRegion}
          />
          <LocationFilter
            id="select-city"
            headline="ГОРОД / РАЙОН"
            firstOption="Любой"
            options={cities && cities.city}
            disabled={this.state.region === 'Область'}
            handleLocation={this.handleCity}
          />
          <PriceFilter
            priceTo={priceTo}
            priceFrom={priceFrom}
            handlePriceFrom={this.handlePriceFrom}
            handlePriceTo={this.handlePriceTo}
          />
          <SwitchFilter
            headline="Состояние"
            classNameFilter="state-filter"
            typeSwitch="radio"
            nameRadioBtn="state"
            filters={stateFilter}
            handleSwitchFilter={this.handleStateProduct}
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
              this.handleIsWithPhoto,
              this.handleIsExchange
            ]}
          />
          <Button
            className="btn_show-result"
            onClick={this.handleFilters}
            mode="primary_blue"
            label={`Показать результаты(${products.length})`}
            labelSize="large"
          />
          <Button
            mode="default"
            className="btn_reset-filters"
            label="Сбросить фильтры"
            labelSize="large"
          />
          <Button
            mode="default_green"
            className="btn_save-search"
            label="Сохранить поиск"
            labelSize="large"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: getProductsByCategory(state)
});


export default connect(mapStateToProps, {
  changeProducts,
  changeCategoriesFilter,
})(FilterPanel);
