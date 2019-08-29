import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import CategoriesFilter from './CategoriesFilter';
import LocationFilter from './LocationFilter';
import PriceFilter from './PriceFilter';
import SwitchFilter from './SwitchFilter';
import CheckboxFilter from './CheckboxFilter';
import Button from '../../Button';
import {
  locations, stateFilter, sellerFilter, checkboxFilter, applyFilters
} from '../../../constants/filters';
import {getCorrectProducts, getFilters, getRegion} from '../../../selectors/filters';
import {
  changeCorrectProducts, changeRegion, changeCity, changeStateProduct, changeSeller,
  changeIsWithPhoto, changeFashionableSummer, changeInstallmentHalva, changeIsExchange
} from '../../../actions/filters';
import {getCategoriesCorrectProducts} from '../../../selectors/products';
import {changeProducts, changeCategoriesFilter} from '../../../actions/products';
import './style.css';

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
            id="select-region"
            headline="ВСЯ БЕЛАРУСЬ"
            firstOption="Область"
            options={locations.map(location => location.region)}
            handleLocation={this.props.changeRegion}
          />
          <LocationFilter
            id="select-city"
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
          <Button
            className="btn_show-result"
            onClick={this.handleFilters}
            mode="primary_blue"
            label={`Показать результаты(${correctProducts.length})`}
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
  changeStateProduct,
  changeSeller,
  changeIsWithPhoto,
  changeFashionableSummer,
  changeInstallmentHalva,
  changeIsExchange,
})(FilterPanel);
