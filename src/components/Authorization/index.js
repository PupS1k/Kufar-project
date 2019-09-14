import React, {PureComponent} from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {getIsRegistration, getTab} from '../../selectors/user';
import {toggleTab, toggleIsOpenModel, toggleIsRegistration} from '../../actions/user';
import FormLogIn from './FormLogin';
import FormRegistration from './FormRegistration';
import Button from '../Button';
import './style.css';

class Authorization extends PureComponent {
  handleTabLogin = () => this.props.toggleTab(true);

  handleTabRegistration = () => this.props.toggleTab(false);

  handleCloseModel = () => this.props.toggleIsOpenModel();

  handleIsRegistration = () => {
    this.handleCloseModel();
    this.props.toggleIsRegistration();
  };


  render() {
    const {tab, registrationSuccessful} = this.props;
    return (
      <div>
        {registrationSuccessful ? (
          <div className="registration-successful">
            <p>Регистрация прошла успешно</p>
            <Button
              onClick={this.handleIsRegistration}
              label="Понятно"
              labelSize="large"
              mode="primary_green"
            />
          </div>
        )
          : (
            <div>
              <div className="authorization-tabs">
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
                ? <FormLogIn />
                : <FormRegistration />}
            </div>
          )
      }
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tab: getTab(state),
  registrationSuccessful: getIsRegistration(state)
});

export default connect(mapStateToProps, {
  toggleTab, toggleIsOpenModel, toggleIsRegistration
})(Authorization);
