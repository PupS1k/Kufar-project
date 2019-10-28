import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import CategoryFilter from './CategoryFilter';
import SelectField from '../SelectField';
import PriceFilter from './PriceFilter';
import SwitchList from '../SwitchList';
import CheckboxList from '../CheckboxList';
import Button from '../Button';
import {locations, checkboxFilter, stateFilters, sellerFilters} from '../../constants';
import {applyFilters, location} from '../../utils';
import {getCategory, getProductsByCategory} from '../../selectors/products';
import {changeProducts, changeCategoriesFilter} from '../../actions/products';
import {changeFilters, resetFilters} from '../../actions/filters';
import {getFilters} from '../../selectors/filters';
import {Context} from '../Context';
import './style.css';

class FilterPanel extends PureComponent {
  static contextType = Context;

  state = {
    products: this.props.products
  };

  componentDidMount() {
    this.props.changeCategoriesFilter('Все категории');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.products === this.state.products) {
      const {products, filters} = this.props;
      if (products) {
        this.setState({
          products: products.filter(product => applyFilters({
            ...filters,
            location: location(filters.region, filters.city)
          }, product))
        });
      }
    }
  }

  handleApplyFilters = () => {
    window.scrollTo(0, 0);
    this.props.changeProducts(this.state.products);
    if (this.props.className !== 'filter-panel') this.context();
  };

  handleRegion = value => this.props.changeFilters({region: value});

  handleCity = value => this.props.changeFilters({city: value});

  handlePriceFrom = value => this.props.changeFilters({priceFrom: value});

  handlePriceTo = value => this.props.changeFilters({priceTo: value});

  handleStateProduct = value => this.props.changeFilters({stateProduct: value});

  handleSeller = value => this.props.changeFilters({seller: value});

  handleIsWithPhoto = () => this.props
    .changeFilters({isWithPhoto: !this.props.filters.isWithPhoto});

  handleFashionableSummer = () => this.props
    .changeFilters({fashionableSummer: !this.props.filters.fashionableSummer});

  handleInstallmentHalva = () => this.props
    .changeFilters({installmentHalva: !this.props.filters.installmentHalva});

  handleIsExchange = () => this.props.changeFilters({isExchange: !this.props.filters.isExchange});


  render() {
    const {resetFilters, className, filters} = this.props;
    const {products} = this.state;
    const cities = locations.find(location => location.region === filters.region);
    return (
      <div className={className}>
        {
          this.props.className === 'filter-panel'
          && <CategoryFilter />
        }
        <div className="other-filters-container">
          <SelectField
            id="select-region"
            headline="ВСЯ БЕЛАРУСЬ"
            firstOption="Область"
            options={locations.map(location => location.region)}
            handleLocation={this.handleRegion}
          />
          <SelectField
            id="select-city"
            headline="ГОРОД / РАЙОН"
            firstOption="Любой"
            options={cities && cities.city}
            disabled={this.state.region === 'Область'}
            handleLocation={this.handleCity}
          />
          <PriceFilter
            priceTo={filters.priceTo}
            priceFrom={filters.priceFrom}
            handlePriceFrom={this.handlePriceFrom}
            handlePriceTo={this.handlePriceTo}
          />
          <SwitchList
            headline="Состояние"
            classNameFilter="state-filter"
            nameRadioBtn="state"
            filters={stateFilters}
            checked={filters.stateProduct}
            handleSwitchFilter={this.handleStateProduct}
          />
          <SwitchList
            headline="ПРОДАВЕЦ"
            classNameFilter="seller-filter"
            nameRadioBtn="seller"
            filters={sellerFilters}
            checked={filters.seller}
            handleSwitchFilter={this.handleSeller}
          />
          <CheckboxList
            classNameFilter="additional-modes"
            filters={checkboxFilter}
            handlesSwitchFilter={[
              this.handleFashionableSummer,
              this.handleInstallmentHalva,
              this.handleIsWithPhoto,
              this.handleIsExchange
            ]}
            isChecked={[
              filters.fashionableSummer,
              filters.installmentHalva,
              filters.isWithPhoto,
              filters.isExchange
            ]}
          />
          <Button
            className="btn_show-result"
            onClick={this.handleApplyFilters}
            mode="primary_blue"
            label={`Показать результаты(${products.length})`}
            labelSize="large"
          />
          <Button
            mode="default"
            className="btn_reset-filters"
            onClick={resetFilters}
            label="Сбросить фильтры"
            labelSize="large"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: getProductsByCategory(state),
  category: getCategory(state),
  filters: getFilters(state)
});


export default connect(mapStateToProps, {
  changeProducts,
  changeCategoriesFilter,
  changeFilters,
  resetFilters
})(FilterPanel);
