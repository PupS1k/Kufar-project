import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '../Button';
import SelectField from '../SelectField';
import InputField from '../InputField';
import SwitchList from '../SwitchList';
import CheckboxList from '../CheckboxList';
import noPhoto from '../../images/noPhoto.png';
import {createProductAsync, getProductAsync} from '../../actions/products';
import {
  checkboxProduct, locations, stateFilter, categories, location
} from '../../constants';
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
    pricePrimary: '',
    category: 'Все категории',
    formErrors: {
      name: '',
      price: ''
    },
    formValid: false
  };

  handleInput = (event) => {
    const {value, name} = event.currentTarget;
    this.setState({[name]: value}, () => this.validateField(name, value));
  };

  handlePrice = (event) => {
    let price = event.currentTarget.value;
    if (price < 0) price *= -1;
    if (price.length > 1) if (price[0] === '0' || price[0] === '-') delete price[0];
    this.setState({price});
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
      price: priceProduct,
      announced: new Date()
    });
    this.props.history.push('/');
  };


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
              />
              <div className="icon-checkbox-btn" />
              <p>Договорная</p>
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

export default connect(null, {createProductAsync, getProductAsync})(AddProduct);
