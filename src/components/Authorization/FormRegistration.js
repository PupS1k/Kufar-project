import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {registrationUserAsync} from '../../actions/user';
import {getLogInError, getRegistrationError} from '../../selectors/user';

class FormRegistration extends PureComponent{
  state = {
    seller: '',
    mail: '',
    password: '',
    verificationPassword: '',
    formErrors: {mail: '', password: '', verificationPassword: ''},
    emailValid: false,
    passwordValid: false,
    verificationPasswordValid: false,
    formValid: false
  };

  handleInput = event => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    this.setState({[name]: value}, () => this.validateField(name, value));
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let verificationPasswordValid = this.state.verificationPasswordValid;

    switch(fieldName) {
      case 'mail':
        emailValid = value;
        if(!emailValid)
          fieldValidationErrors.mail = emailValid ? '' : 'Обязательно';
        else {
          emailValid = /[a-zA-Z0-9]+@[a-z]+[.]+[a-z]+/.test(value);
          fieldValidationErrors.mail = emailValid ? ''
            : 'Проверьте введенный e-mail - неправильный формат';
        }
        break;
      case 'password':
        passwordValid = value;
        if(!passwordValid)
          fieldValidationErrors.password = passwordValid ? '' : 'Обязательно';
        else {
          passwordValid = value.length > 4;
          fieldValidationErrors.password = passwordValid ? ''
            : 'Ваш пароль слишком короткий. Минимальная длина пароля 5 символов';
        }
        break;
      case 'verificationPassword':
        verificationPasswordValid = value === this.state.password;
        fieldValidationErrors.verificationPassword = verificationPasswordValid ? ''
          : 'Пароли не совпадают';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid,
      verificationPasswordValid: verificationPasswordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid
        && this.state.verificationPasswordValid});
  }

  handleSubmit = event => {
    event.preventDefault();
    const {registrationUserAsync, handleRegistration} = this.props;
    const {mail, password, seller} = this.state;
    registrationUserAsync('registration',{
      mail,
      password,
      seller
    });
    handleRegistration();
  };


  render() {
    const {mail, password, verificationPassword, formErrors, formValid} = this.state;
    const {registrationError} = this.props;
    return(
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
              name="mail" value={mail}
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
          {registrationError && <span>Аккаунт с таким e-mail уже существует</span>}
          <button
            type="submit"
            className="btn-submit"
            disabled={!formValid}
          >
            Создать Профиль
          </button>
        </form>
    )
  }
}

const mapStateToProps = state => ({
  registrationError: getRegistrationError(state)
});

export default connect(mapStateToProps, {registrationUserAsync})(FormRegistration);
