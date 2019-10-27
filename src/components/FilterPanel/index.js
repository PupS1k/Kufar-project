import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import CategoryFilter from './CategoryFilter';
import SelectField from '../SelectField';
import PriceFilter from './PriceFilter';
import SwitchList from '../SwitchList';
import CheckboxList from '../CheckboxList';
import Button from '../Button';
import {locations, checkboxFilter} from '../../constants';
import {applyFilters, location} from '../../utils';
import {getCategory, getProductsByCategory} from '../../selectors/products';
import {changeProducts, changeCategoriesFilter} from '../../actions/products';
import {Context} from '../Context';
import './style.css';

class FilterPanel extends PureComponent {
  static contextType = Context;

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
    stateFilters: [{name: 'Любое', checked: true},
      {name: 'Новое', checked: false}, {name: 'Б/у', checked: false}],
    sellerFilters: [{name: 'Любой', checked: true},
      {name: 'Частное лицо', checked: false}, {name: 'Компания', checked: false}],
    products: this.props.products,
    isReset: false
  };

  componentDidMount() {
    this.props.changeCategoriesFilter('Все категории');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.products === this.state.products) {
      const {products} = this.props;
      if (products) {
        const correctProducts = this.handleChangeProducts();
        if (this.state.isReset) {
          window.scrollTo(0, 0);
          this.props.changeProducts(correctProducts);
          this.setState({isReset: false})
        }
        this.setState({products: correctProducts});
      }
    }
  }

  handleChangeProducts = () => this.props.products
    .filter(product => applyFilters({
      location: location(this.state.region, this.state.city),
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


  handleApplyFilters = () => {
    window.scrollTo(0, 0);
    this.props.changeProducts(this.state.products);
    if(this.props.className !== 'filter-panel') this.context();
  };

  handleResetFilters = () =>
    this.setState({
      isWithPhoto: false,
      fashionableSummer: false,
      installmentHalva: false,
      isExchange: false,
      stateFilters: [{name: 'Любое', checked: true},
        {name: 'Новое', checked: false}, {name: 'Б/у', checked: false}],
      sellerFilters: [{name: 'Любой', checked: true},
        {name: 'Частное лицо', checked: false}, {name: 'Компания', checked: false}],
      priceFrom: '',
      priceTo: '',
      stateProduct: 'Любое',
      seller: 'Любой',
      isReset: true
    });


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
    const {
      products, priceTo, priceFrom, fashionableSummer, sellerFilters,
      isExchange, installmentHalva, isWithPhoto, stateFilters
    } = this.state;
    const cities = locations.find(location => location.region === this.state.region);
    return (
      <div className={this.props.className}>
        {
          this.props.className === 'filter-panel' &&
          <CategoryFilter handleCategoryFilter={this.props.changeCategoriesFilter}/>
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
            priceTo={priceTo}
            priceFrom={priceFrom}
            handlePriceFrom={this.handlePriceFrom}
            handlePriceTo={this.handlePriceTo}
          />
          <SwitchList
            headline="Состояние"
            classNameFilter="state-filter"
            nameRadioBtn="state"
            filters={stateFilters}
            handleSwitchFilter={this.handleStateProduct}
          />
          <SwitchList
            headline="ПРОДАВЕЦ"
            classNameFilter="seller-filter"
            nameRadioBtn="seller"
            filters={sellerFilters}
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
              fashionableSummer,
              installmentHalva,
              isWithPhoto,
              isExchange
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
            onClick={this.handleResetFilters}
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
  products: getProductsByCategory(state),
  category: getCategory(state)
});


export default connect(mapStateToProps, {
  changeProducts,
  changeCategoriesFilter
})(FilterPanel);
