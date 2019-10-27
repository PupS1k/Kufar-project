import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSignUpError} from '../../../selectors/user';
import {signUp} from '../../../actions/user';
import RegistrView from './RegistrView';
import {
  isVerificationPassword, isRequired, minLength, mailCorrect
} from '../../validation';
import {Context} from '../../Context';

class RegistrContainer extends Component {
  static contextType = Context;

  state = {
    seller: 'Частное лицо',
    mail: '',
    password: '',
    verificationPassword: '',
    formErrors: {mail: '', password: '', verificationPassword: ''},
    formValid: false,
  };

  handleInput = (event) => {
    const {value, name} = event.currentTarget;
    this.setState({[name]: value}, () => this.validateField(name, value));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {signUp} = this.props;
    const {mail, password, seller, formValid} = this.state;
    if(formValid) signUp({
      mail,
      password,
      sellerType: seller
    }, this.context);
  };

  validateForm = formErrors => this.setState({
    formValid: !formErrors.mail && !formErrors.password && !formErrors.verificationPassword
  });

  validateField(fieldName, value) {
    const {formErrors} = this.state;
    switch (fieldName) {
      case 'mail':
        formErrors.mail = isRequired(value) || mailCorrect(value);
        break;
      case 'password':
        formErrors.password = isRequired(value) || minLength(value, 4);
        formErrors.verificationPassword = isVerificationPassword(value,
          this.state.verificationPassword);
        break;
      case 'verificationPassword':
        formErrors.verificationPassword = isVerificationPassword(value, this.state.password);
        break;
      default:
        break;
    }
    this.setState({formErrors}, () => this.validateForm(formErrors));
  }

  render() {
    const {
      mail, password, verificationPassword, formErrors, formValid
    } = this.state;
    const {signUpError} = this.props;
    return (
      <RegistrView
        onSubmit={this.handleSubmit}
        handleInput={this.handleInput}
        mail={mail}
        password={password}
        verificationPassword={verificationPassword}
        formErrors={formErrors}
        isValid={!formValid}
        signUpError={signUpError}
      />
    );
  }
}

const mapStateToProps = state => ({
  signUpError: getSignUpError(state)
});

export default connect(mapStateToProps, {signUp})(RegistrContainer);
