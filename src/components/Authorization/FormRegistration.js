import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registrationUserAsync} from '../../actions/user';
import {getRegistrationError} from '../../selectors/user';

class FormRegistration extends Component {
  state = {
    seller: '',
    mail: '',
    password: '',
    verificationPassword: '',
    formErrors: {mail: '', password: '', verificationPassword: ''},
    formValid: false,
    submitting: false
  };

  handleInput = (event) => {
    const {value, name} = event.currentTarget;
    this.handleIsSubmitting(false);
    this.setState({[name]: value}, () => this.validateField(name, value));
  };

  handleIsSubmitting = value => this.setState({submitting: value});

  handleSubmit = (event) => {
    event.preventDefault();
    const {registrationUserAsync} = this.props;
    const {mail, password, seller} = this.state;
    this.handleIsSubmitting(true);
    registrationUserAsync('registration', {
      mail,
      password,
      seller
    });
  };

  validateForm = formErrors => this.setState({
    formValid: !(!formErrors.mail && !formErrors.password && !formErrors.verificationPassword)
  });

  validateField(fieldName, value) {
    const {formErrors} = this.state;
    switch (fieldName) {
      case 'mail':
        if (!value) formErrors.mail = 'Обязательно';
        else {
          formErrors.mail = /[a-zA-Z0-9]+@[a-z]+[.]+[a-z]+/.test(value) ? ''
            : 'Проверьте введенный e-mail - неправильный формат';
        }
        break;
      case 'password':
        if (!value) formErrors.password = 'Обязательно';
        else {
          formErrors.password = value.length > 4 ? ''
            : 'Ваш пароль слишком короткий. Минимальная длина пароля 5 символов';
        }
        formErrors.verificationPassword = value === this.state.verificationPassword ? ''
          : 'Пароли не совпадают';
        break;
      case 'verificationPassword':
        formErrors.verificationPassword = value === this.state.password ? ''
          : 'Пароли не совпадают';
        break;
      default:
        break;
    }
    this.setState({formErrors}, () => this.validateForm(formErrors));
  }

  render() {
    const {
      mail, password, verificationPassword, formErrors, formValid, submitting
    } = this.state;
    const {registrationError} = this.props;
    return (
      <form className="form-logIn" onSubmit={this.handleSubmit}>
        <div className="seller-status">
          <label className="icon-label">
            <input
              name="seller"
              className="icon-input"
              value="Частное лицо"
              type="radio"
              onChange={this.handleInput}
              defaultChecked
            />
            <div className="icon-radio-btn" />
            <p>Частное лицо</p>
          </label>
          <label className="icon-label">
            <input
              name="seller"
              value="Компания"
              onChange={this.handleInput}
              className="icon-input"
              type="radio"
            />
            <div className="icon-radio-btn" />
            <p>Компания</p>
          </label>
        </div>
        <div className="input-field">
          <input
            type="text"
            name="mail"
            value={mail}
            onChange={this.handleInput}
            placeholder="E-mail"
          />
          {formErrors.mail && <span>{formErrors.mail}</span>}
        </div>
        <div className="input-field">
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInput}
            placeholder="Пароль"
          />
          {formErrors.password && <span>{formErrors.password}</span>}
        </div>
        <div className="input-field">
          <input
            type="password"
            name="verificationPassword"
            value={verificationPassword}
            onChange={this.handleInput}
            placeholder="Повторите пароль"
          />
          {formErrors.verificationPassword && <span>{formErrors.verificationPassword}</span>}
        </div>
        {(registrationError && submitting) && <span>Аккаунт с таким e-mail уже существует</span>}
        <button
          type="submit"
          className="btn-submit"
          disabled={!(!formValid && mail && password && verificationPassword)}
        >
            Создать Профиль
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  registrationError: getRegistrationError(state)
});

export default connect(mapStateToProps, {registrationUserAsync})(FormRegistration);
