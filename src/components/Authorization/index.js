import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import close from '../../images/plusReset.png'
import './style.css';
import {getTab} from '../../selectors/user';
import {toggleTab, toggleIsAuthorization} from '../../actions/user';
import FormLogIn from './FormLogIn';
import FormRegistration from './FormRegistration';

class Authorization extends PureComponent {
  state = {
    registrationSuccessful: false
  };

  handleRegistrationSuccessful = () => this.setState({registrationSuccessful: true});
  handleRegistration = () => this.setState({registrationSuccessful: false});

  handleTabLogin = () => this.props.toggleTab(true);
  handleTabRegistration = () => this.props.toggleTab(false);

  handleCloseModel = () => {
    this.props.toggleIsAuthorization();
    this.handleRegistration();
  };

  render() {
    const {tab} = this.props;
    const {registrationSuccessful} = this.state;
    return (
      <div className="modal">
        <div className="authorization">
          <div className="modal__close">
            <button className="modal__close-button" onClick={this.handleCloseModel}>
              <img src={close} alt="Close"/>
            </button>
          </div>
          {registrationSuccessful ?
            <div className="registration-successful">
              <p>Регистрация прошла успешно</p>
            </div> :
            <div>
              <div className="authorization-tabs">
                <button className={'tab' + (!tab ? '' : ' tab-selected')}
                        onClick={this.handleTabLogin}>Вход
                </button>
                <button className={'tab' + (tab ? '' : ' tab-selected')}
                        onClick={this.handleTabRegistration}>Регистрация
                </button>
              </div>
              {tab ? <FormLogIn/> : <FormRegistration handleRegistration={this.handleRegistrationSuccessful}/>}
            </div>
          }
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  tab: getTab(state)
});

export default connect(mapStateToProps, {toggleTab, toggleIsAuthorization})(Authorization);
