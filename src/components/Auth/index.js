import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import AuthorizationForm from './Authorization';
import RegistrationForm from './Registration';
import {getTab} from '../../selectors/user';
import {toggleTab} from '../../actions/user';
import Button from '../Button';
import './style.css';

class Auth extends PureComponent {
  handleTabLogin = () => this.props.toggleTab(true);

  handleTabRegistration = () => this.props.toggleTab(false);

  render() {
    const {tab} = this.props;
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
            className={`tab${tab ? '' : ' tab-selected'}`}
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
const mapStateToProps = state => ({
  tab: getTab(state)
});

export default connect(mapStateToProps, {toggleTab})(Auth);
