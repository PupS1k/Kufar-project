import React, {Component} from 'react';
import {connect} from 'react-redux';
import {isRequired, minLength} from './validation';
import Button from '../Button';
import {createProductAsync} from '../../actions/products';
import LocationFilter from '../MainContent/FilterPanel/LocationFilter';
import {
  checkboxProduct, locations, stateFilter, categories, location
} from '../../constants/filters';
import SwitchFilter from '../MainContent/FilterPanel/SwitchFilter';
import CheckboxFilter from '../MainContent/FilterPanel/CheckboxFilter';
import noPhoto from '../../images/noPhoto.png';
import './style.css';

class AddProduct extends Component {
  state = {
    file: {},
    imagePreviewUrl: '',
    name: '',
    region: 'Область',
    city: 'Любой',
    price: '0',
    stateProduct: 'Любое',
    fashionableSummer: false,
    installmentHalva: false,
    isExchange: false,
    pricePrimary: '',
    category: 'Все категории',
    formErrors: {
      name: '',
      category: '',
      price: '',
      stateProduct: '',
      region: ''
    },
    formValid: false,
    submitting: false,
  };

  handleInput = (event) => {
    const {value, name} = event.currentTarget;
    this.handleIsSubmitting(false);
    this.setState({[name]: value}, () => this.validateField(name, value));
  };

  handleDownloadImage = (event) => {
    const reader = new FileReader();
    const file = event.currentTarget.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      name, price, region, city, category,
      stateProduct, file, isExchange, imagePreviewUrl,
      installmentHalva, fashionableSummer, pricePrimary
    } = this.state;
    const {createProductAsync} = this.props;
    const priceNegotiated = pricePrimary ? 'Договорная' : price;
    const priceProduct = priceNegotiated === '0' ? 'Бесплатно' : price;

    this.handleIsSubmitting(true);

    const form = new FormData();
    form.append('file', file);

    createProductAsync('products', {
      image: imagePreviewUrl ? form : '',
      name,
      categories: category,
      state: stateProduct,
      fashionableSummer,
      installmentHalva,
      isExchange,
      location: location(region, city),
      price: priceProduct
    });
  };

  handleIsSubmitting = value => this.setState({submitting: value});

  validateForm = formErrors => this
    .setState({formValid: !(!formErrors.name && !formErrors.price)});

  handleRegion = value => this.setState({region: value});

  handleCategory = value => this.setState({category: value});

  handleCity = value => this.setState({city: value});

  handleStateProduct = value => this.setState({stateProduct: value});

  handlePricePrimary = event => this.setState({pricePrimary: event.currentTarget.value});

  handleFashionableSummer = () => this.setState(({fashionableSummer}) => (
    {fashionableSummer: !fashionableSummer}));


  handleInstallmentHalva = () => this.setState(({installmentHalva}) => (
    {installmentHalva: !installmentHalva}));

  handleIsExchange = () => this.setState(({isExchange}) => ({isExchange: !isExchange}));

  validateField(fieldName, value) {
    const {formErrors} = this.state;
    switch (fieldName) {
      case 'name':
        formErrors.name = isRequired(value) || minLength(value, 3);
        break;
      case 'price':
        formErrors.price = isRequired(value);
        break;
      default:
        break;
    }
    this.setState({formErrors}, this.validateForm(formErrors));
  }

  render() {
    const {
      name,
      formErrors, formValid,
      price, imagePreviewUrl
    } = this.state;
    const cities = locations.find(location => location.region === this.state.region);
    return (
      <form className="form-add-product" onSubmit={this.handleSubmit}>
        <div className="image-container">
          <div className="input-file-container">
            <input className="input-file" onChange={this.handleDownloadImage} id="my-file" type="file" />
            <label htmlFor="my-file" className="input-file-trigger">Select a file...</label>
          </div>
          <img className="file-result" src={imagePreviewUrl || noPhoto} alt="Image" />
        </div>
        <div className="product-data">
          <div className="input-field">
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInput}
              placeholder="Название"
              error={formErrors.name && 'err'}
            />
            {formErrors.name && <span>{formErrors.name}</span>}
          </div>
          <div className="input-field">
            <input
              type="number"
              name="price"
              value={price}
              min={0}
              onChange={this.handleInput}
              placeholder="Цена"
              error={formErrors.price && 'err'}
            />
            {formErrors.price && <span>{formErrors.price}</span>}
          </div>
          <div className="state-filter">
            <label className="icon-label">
              <input
                className="icon-input"
                type="checkbox"
                value="Договорная"
                onChange={this.handlePricePrimary}
              />
              <div className="icon-checkbox-btn" />
              <p>Договорная</p>
            </label>
          </div>
          <LocationFilter
            id="select-region"
            headline="МЕСТОНАХОЖДЕНИЕ"
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
          <LocationFilter
            id="select-category"
            headline="Выберите категорию"
            firstOption="Все категории"
            options={categories}
            handleLocation={this.handleCategory}
          />
          <SwitchFilter
            headline="Состояние"
            classNameFilter="state-filter"
            typeSwitch="radio"
            nameRadioBtn="state"
            filters={stateFilter}
            handleSwitchFilter={this.handleStateProduct}
          />
          <CheckboxFilter
            classNameFilter="additional-modes"
            typeSwitch="checkbox"
            filters={checkboxProduct}
            handlesSwitchFilter={[
              this.handleFashionableSummer,
              this.handleInstallmentHalva,
              this.handleIsExchange
            ]}
          />
          <Button
            type="submit"
            className="btn-submit"
            disabled={!(!formValid && name && price)}
            mode="primary_green"
            label="Создать объявление"
            labelSize="large"
          />
        </div>
      </form>
    );
  }
}

export default connect(null, {createProductAsync})(AddProduct);
