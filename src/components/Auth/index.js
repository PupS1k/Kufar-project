import React, {PureComponent} from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {signInErrorClear, signUpErrorClear} from '../../actions/user';
import AuthorizationForm from './Authorization';
import RegistrationForm from './Registration';
import Button from '../Button';
import './style.css';

class Auth extends PureComponent {
  state = {
    tab: true
  };

  handleTabLogin = () => {
    this.props.signUpErrorClear();
    this.setState({tab: true});
  };

  handleTabRegistration = () => {
    this.props.signInErrorClear();
    this.setState({tab: false});
  };

  render() {
    const {tab} = this.state;
    return (
      <div>
        <div className="auth-tabs">
          <Button
            className={classNames('tab', {'tab-selected': tab})}
            onClick={this.handleTabLogin}
            label="Вход"
            labelSize="large"
            mode="default"
          />
          <Button
            className={classNames('tab', {'tab-selected': !tab})}
            onClick={this.handleTabRegistration}
            label="Регистрация"
            labelSize="large"
            mode="default"
          />
        </div>
        {tab
          ? <AuthorizationForm />
          : <RegistrationForm />}
      </div>
    );
  }
}

export default connect(null, {signInErrorClear, signUpErrorClear})(Auth);
