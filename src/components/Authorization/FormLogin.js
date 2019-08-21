import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {logInUserAsync} from '../../actions/user';
import {getLogInError} from '../../selectors/user'

class FormLogin extends PureComponent{
  state = {
    mail: '',
    password: '',
    formErrors: {mail: '', password: ''},
    emailValid: false,
    passwordValid: false,
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
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  handleSubmit = event => {
    event.preventDefault();
    const {logInUserAsync} = this.props;
    const {mail, password} = this.state;
    logInUserAsync('login', {
      mail,
      password
    })
  };


  render() {
    const {mail, password, formErrors, formValid} = this.state;
    const {logInError} = this.props;
    return(
        <form className="form-logIn" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input type="text" name="mail" value={mail} onChange={this.handleInput} placeholder="E-mail"/>
            {formErrors.mail && <span>{formErrors.mail}</span>}
          </div>
          <div className="input-field">
            <input type="password" name="password" value={password} onChange={this.handleInput} placeholder="Пароль"/>
            {formErrors.password && <span>{formErrors.password}</span>}
          </div>
          {logInError && <span>Неправильно введен e-mail или пароль</span>}
          <button type="submit" className="btn-submit" disabled={!formValid} >Войти</button>
        </form>
    )
  }
}

const mapStateToProps = state => ({
  logInError: getLogInError(state)
});

export default connect(mapStateToProps, {logInUserAsync})(FormLogin);
