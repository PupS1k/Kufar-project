import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import CategoriesFilter from './CategoriesFilter';
import LocationFilter from './LocationFilter';
import PriceFilter from './PriceFilter';
import SwitchFilter from './SwitchFilter';
import CheckboxFilter from './CheckboxFilter';
import {
  locations, stateFilter, sellerFilter, checkboxFilter, applyFilters
} from '../../../constants';
import {
  getCorrectProducts, getFilters, changeCorrectProducts, getRegion, changeRegion,
  changeCity, changePriceFrom, changePriceTo, changeStateProduct, changeSeller,
  changeIsWithPhoto, changeFashionableSummer, changeInstallmentHalva, changeIsExchange
} from '../../../reducer/filters';
import {
  changeProducts, changeCategoriesFilter, getCategoriesCorrectProducts
} from '../../../reducer/products';


class FilterPanel extends PureComponent {
  componentDidUpdate(prevProps) {
    if (prevProps.correctProducts === this.props.correctProducts) {
      const {products} = this.props;
      if (products) {
        const correctProducts = products
          .filter(product => applyFilters(this.props.filters, product));
        this.props.changeCorrectProducts(correctProducts);
      }
    }
  }

  handleFilters = () => {
    window.scrollTo(0, 0);
    this.props.changeProducts(this.props.correctProducts);
  };

  render() {
    const {correctProducts} = this.props;
    const cities = locations.find(location => location.region === this.props.region);
    return (
      <div className="filter-panel">
        <CategoriesFilter handleCategoriesFilter={this.props.changeCategoriesFilter} />
        <div className="other-filters-container">
          <LocationFilter
            id="list-region-filter"
            headline="ВСЯ БЕЛАРУСЬ"
            firstOption="Область"
            options={locations.map(location => location.region)}
            handleLocation={this.props.changeRegion}
          />
          <LocationFilter
            id="list-city-filter"
            headline="ГОРОД / РАЙОН"
            firstOption="Любой"
            options={cities && cities.city}
            disabled={this.props.region === 'Область'}
            handleLocation={this.props.changeCity}
          />
          <PriceFilter />
          <SwitchFilter
            headline="Состояние"
            classNameFilter="state-filter"
            typeSwitch="radio"
            nameRadioBtn="state"
            filters={stateFilter}
            handleSwitchFilter={this.props.changeStateProduct}
          />
          <SwitchFilter
            headline="ПРОДАВЕЦ"
            classNameFilter="seller-filter"
            typeSwitch="radio"
            nameRadioBtn="seller"
            filters={sellerFilter}
            handleSwitchFilter={this.props.changeSeller}
          />
          <CheckboxFilter
            classNameFilter="additional-modes"
            typeSwitch="checkbox"
            filters={checkboxFilter}
            handlesSwitchFilter={[
              this.props.changeFashionableSummer,
              this.props.changeInstallmentHalva,
              this.props.changeIsWithPhoto,
              this.props.changeIsExchange
            ]}
          />
          <button type="button" className="btn--show-result" onClick={this.handleFilters}>
              Показать результаты(
            {correctProducts.length}
            )
          </button>
          <button type="button" className="btn--reset-filters">Сбросить фильтры</button>
          <button type="button" className="btn--save-search">Сохранить поиск</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: getFilters(state),
  region: getRegion(state),
  correctProducts: getCorrectProducts(state),
  products: getCategoriesCorrectProducts(state)
});


export default connect(mapStateToProps, {
  changeCorrectProducts,
  changeProducts,
  changeCategoriesFilter,
  changeRegion,
  changeCity,
  changePriceFrom,
  changePriceTo,
  changeStateProduct,
  changeSeller,
  changeIsWithPhoto,
  changeFashionableSummer,
  changeInstallmentHalva,
  changeIsExchange
})(FilterPanel);
