import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '../Button/Button';
import SelectField from '../Field/SelectField';
import InputField from '../Field/InputField';
import SwitchList from '../Field/SwitchList';
import CheckboxList from '../Field/CheckboxList';
import noPhoto from '../../images/noPhoto.png';
import {createProductAsync, getProductAsync} from '../../actions/products';
import {
  checkboxProduct, locations, stateFilter, categories
} from '../../constants';
import {location} from '../../utils';
import {isRequired, minLength} from '../validation';
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
    pricePrimary: false,
    priceFree: false,
    category: 'Все категории',
    formErrors: {
      name: '',
      price: '',
      location: ''
    },
    formValid: false
  };

  handleInput = (event) => {
    const {value, name} = event.currentTarget;
    this.setState({[name]: value}, () => this.validateField(name, value));
  };

  handlePrice = (event) => {
    try {
      let price = event.currentTarget.value;
      if (price < 0) price *= -1;
      if (price.length > 1) if (price[0] === '0' || price[0] === '-') delete price[0];
      this.setState({price});
    } catch (err) {
      console.error('Not a number');
    }
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
      installmentHalva, fashionableSummer, pricePrimary, priceFree
    } = this.state;
    const {createProductAsync} = this.props;
    const priceProduct = priceFree ? 'Бесплатно' : (pricePrimary ? 'Договорная' : price);

    const form = new FormData();
    form.append('file', file);

    createProductAsync('products', {
      image: imagePreviewUrl ? form : '',
      name,
      categories: category,
      state: stateProduct,
      stocks: {
        fashionableSummer
      },
      installmentHalva,
      isExchange,
      location: location(region, city),
      price: priceProduct,
      createDate: new Date()
    });
    this.props.history.push('/');
  };


  validateForm = formErrors => this
    .setState({formValid: !(!formErrors.name && !formErrors.price && !formErrors.location)});

  handleRegion = value => this.setState({region: value},
    () => this.validateField('region', value));

  handleCity = value => this.setState({city: value},
    () => this.validateField('city', value));

  handleCategory = value => this.setState({category: value});

  handleStateProduct = value => this.setState({stateProduct: value});

  handlePricePrimary = () => this.setState(
    ({pricePrimary}) => ({pricePrimary: !pricePrimary, priceFree: false})
  );

  handlePriceFree = () => this.setState(
    ({priceFree}) => ({priceFree: !priceFree, pricePrimary: false})
  );

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
      case 'city':
        formErrors.location = (value === 'Любой' || value === '')
          ? 'Местонахождение обязательно' : '';
        break;
      case 'region':
        formErrors.location = (value === 'Область' || value === '')
          ? 'Местонахождение обязательно' : '';
        break;
      default:
        break;
    }
    this.setState({formErrors}, this.validateForm(formErrors));
  }

  render() {
    const {
      name, priceFree, pricePrimary,
      formErrors, formValid, city, region,
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
          <InputField
            type="text"
            name="name"
            value={name}
            handleInput={this.handleInput}
            placeholder="Название"
            fieldError={formErrors.name}
          />
          <InputField
            type="number"
            name="price"
            value={price}
            handleInput={this.handlePrice}
            placeholder="Цена"
            fieldError={formErrors.price}
          />
          <div className="state-filter">
            <label className="icon-label">
              <input
                className="icon-input"
                type="checkbox"
                value="Договорная"
                onChange={this.handlePricePrimary}
                checked={pricePrimary}
              />
              <div className="icon-checkbox-btn" />
              <p>Договорная</p>
            </label>
          </div>
          <div className="state-filter">
            <label className="icon-label">
              <input
                className="icon-input"
                type="checkbox"
                value="Бесплатно"
                onChange={this.handlePriceFree}
                checked={priceFree}
              />
              <div className="icon-checkbox-btn" />
              <p>Бесплатно</p>
            </label>
          </div>
          <SelectField
            id="select-region"
            headline="МЕСТОНАХОЖДЕНИЕ"
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
          {formErrors.location && <span>{formErrors.location}</span>}
          <SelectField
            id="select-category"
            headline="Выберите категорию"
            options={categories}
            handleLocation={this.handleCategory}
          />
          <SwitchList
            headline="Состояние"
            classNameFilter="state-filter"
            typeSwitch="radio"
            nameRadioBtn="state"
            filters={stateFilter}
            handleSwitchFilter={this.handleStateProduct}
          />
          <CheckboxList
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
            disabled={!(!formValid && name && price && region !== 'Область' && city !== 'Любой')}
            mode="primary_green"
            label="Создать объявление"
            labelSize="large"
          />
        </div>
      </form>
    );
  }
}

export default connect(null, {createProductAsync, getProductAsync})(AddProduct);
