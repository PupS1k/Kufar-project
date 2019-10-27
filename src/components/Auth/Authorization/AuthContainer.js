import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import AuthView from './AuthView';
import {signIn} from '../../../actions/user';
import {getSignInError} from '../../../selectors/user';
import {isRequired, minLength, mailCorrect} from '../../validation';
import {Context} from '../../Context';

class AuthContainer extends PureComponent {
  static contextType = Context;

  state = {
    mail: '',
    password: '',
    formErrors: {mail: '', password: ''},
    formValid: false
  };

  handleInput = (event) => {
    const {value, name} = event.currentTarget;
    this.setState({[name]: value}, () => this.validateField(name, value));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {mail, password, formValid} = this.state;
    if(formValid) this.props.signIn({mail, password}, this.context);
  };

  validateForm = formErrors => this.setState({
      formValid: !formErrors.mail && !formErrors.password
  });

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
      mail, password, formErrors, formValid
    } = this.state;
    const {signInError} = this.props;
    return (
     <AuthView
       onSubmit={this.handleSubmit}
       handleInput={this.handleInput}
       mail={mail}
       password={password}
       formErrors={formErrors}
       signInError={signInError}
       isValid={!formValid}
     />
    );
  }
}

const mapStateToProps = state => ({
  signInError: getSignInError(state)
});

export default connect(mapStateToProps, {signIn})(AuthContainer);
