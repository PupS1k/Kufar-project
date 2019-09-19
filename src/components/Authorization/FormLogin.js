import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '../Button/Button';
import InputField from '../Field/InputField';
import {logInUserAsync} from '../../actions/user';
import {getUserMail} from '../../selectors/user';
import {isRequired, minLength, mailCorrect} from '../validation';

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
    logInUserAsync('login', {mail, password});
    this.handleIsSubmitting(true);
  };

  handleIsSubmitting = value => this.setState({submitting: value});

  validateForm = formErrors => this
    .setState({formValid: !(!formErrors.mail && !formErrors.password)});

  validateField(fieldName, value) {
    const {formErrors} = this.state;
    switch (fieldName) {
      case 'mail':
        formErrors.mail = isRequired(value) || mailCorrect(value);
        break;
      case 'password':
        formErrors.password = isRequired(value) || minLength(value, 4);
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
    const {userMail} = this.props;
    return (
      <form className="form-logIn" onSubmit={this.handleSubmit}>
        <InputField
          type="text"
          name="mail"
          value={mail}
          handleInput={this.handleInput}
          placeholder="E-mail"
          fieldError={formErrors.mail}
        />
        <InputField
          type="password"
          name="password"
          value={password}
          handleInput={this.handleInput}
          placeholder="Пароль"
          fieldError={formErrors.password}
        />
        {(!userMail && submitting) && <span>Неправильно введен e-mail или пароль</span>}
        <Button
          type="submit"
          className="btn-submit"
          disabled={!(!formValid && mail && password)}
          mode="primary_green"
          label="Войти"
          labelSize="large"
        />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  userMail: getUserMail(state)
});

export default connect(mapStateToProps, {logInUserAsync})(FormLogin);
