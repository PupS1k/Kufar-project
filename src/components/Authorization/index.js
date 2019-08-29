import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import close from '../../images/plusReset.png';
import './style.css';
import {getIsRegistration, getTab} from '../../selectors/user';
import {toggleTab, toggleIsAuthorization, toggleIsRegistration} from '../../actions/user';
import FormLogIn from './FormLogin';
import FormRegistration from './FormRegistration';

class Authorization extends PureComponent {
  handleTabLogin = () => this.props.toggleTab(true);

  handleTabRegistration = () => this.props.toggleTab(false);

  handleCloseModel = () => this.props.toggleIsAuthorization();

  handleIsRegistration = () => {
    this.handleCloseModel();
    this.props.toggleIsRegistration();
  };


  render() {
    const {tab, registrationSuccessful} = this.props;
    return (
      <div className="modal">
        <div className="authorization">
          <div className="modal__close">
            <button className="modal__close-button" onClick={this.handleCloseModel}>
              <img src={close} alt="Close" />
            </button>
          </div>
          {registrationSuccessful
            ? (
              <div className="registration-successful">
                <p>Регистрация прошла успешно</p>
                <button
                  className="btn--add-product"
                  onClick={this.handleIsRegistration}
                >
                  Понятно
                </button>
              </div>
            )
            : (
              <div>
                <div className="authorization-tabs">
                  <button
                    className={`tab${!tab ? '' : ' tab-selected'}`}
                    onClick={this.handleTabLogin}
                  >Вход
                  </button>
                  <button
                    className={`tab${tab ? '' : ' tab-selected'}`}
                    onClick={this.handleTabRegistration}
                  >Регистрация
                  </button>
                </div>
                {tab
                  ? <FormLogIn />
                  : <FormRegistration />}
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tab: getTab(state),
  registrationSuccessful: getIsRegistration(state)
});

export default connect(mapStateToProps, {
  toggleTab, toggleIsAuthorization, toggleIsRegistration
})(Authorization);
