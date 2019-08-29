import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logInUserAsync} from '../../actions/user';
import {getLogInError} from '../../selectors/user';

class FormLogin extends Component {
  state = {
    mail: '',
    password: '',
    formErrors: {mail: '', password: ''},
    formValid: false,
    submitting: false
  };

  handleInput = (event) => {
    const {value, name} = event.currentTarget;
    this.handleIsSubmitting(false);
    this.setState({[name]: value}, () => this.validateField(name, value));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {logInUserAsync} = this.props;
    const {mail, password} = this.state;
    this.handleIsSubmitting(true);
    logInUserAsync('login', {
      mail,
      password
    });
  };

  handleIsSubmitting = value => this.setState({submitting: value});

  validateForm = formErrors => this
    .setState({formValid: !(!formErrors.mail && !formErrors.password)});

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
        break;
      default:
        break;
    }
    this.setState({formErrors}, this.validateForm(formErrors));
  }

  render() {
    const {
      mail, password, formErrors, formValid, submitting
    } = this.state;
    const {logInError} = this.props;
    return (
      <form className="form-logIn" onSubmit={this.handleSubmit}>
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
        {(!logInError && submitting) && <span>Неправильно введен e-mail или пароль</span>}
        <button
          type="submit"
          className="btn-submit"
          disabled={!(!formValid && mail && password)}
        >
          Войти
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  logInError: getLogInError(state)
});

export default connect(mapStateToProps, {logInUserAsync})(FormLogin);
