import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import logo from '../../images/logo.png';
import kufar from '../../images/kufar.png';
import search from '../../images/search.png';
import locationHeader from '../../images/locationHeader.png';
import Button from '../Button';
import plus from '../../images/plus.png';
import {toggleIsOpenModel, changeUser} from '../../actions/user';
import {getIsOpenWindow, getUserMail} from '../../selectors/user';
import ModelWindow from '../ModelWindow';
import IconButton from '../IconButton';
import human from '../../images/profile.png';
import './style.css';

class Header extends PureComponent {
  state = {
    navUser: false
  };

  handleSignOut = () => {
    this.handleNavUser();
    this.props.changeUser('');
  };

  handleAddProduct = () => this.props.history.push('/addProduct');

  handleHome = () => this.props.history.push('/');

  handleNavUser = () => this.setState(({navUser}) => ({navUser: !navUser}));

  handlePersonalRoom = () => {
    this.handleNavUser();
    this.props.history.push('/personalRoom');
  };

  render() {
    const {
      isOpenWindow, toggleIsOpenModel, mail
    } = this.props;
    const {navUser} = this.state;
    return (
      <header>
        <div className="left-part-of-header">
          <div className="logo" onClick={this.handleHome}>
            <img className="logo__img logo-icon" src={logo} alt="Logo" />
            <img className="logo__img logo__text" src={kufar} alt="Logo" />
          </div>
          <div className="search-field-container">
            <label htmlFor="search-field" tabIndex="0">
              <img className="search-field__img" src={search} alt="Search" />
            </label>
            <input id="search-field" type="text" placeholder="Товар, услуга" />
          </div>
          <Button
            className="btn-location"
            label="Вся Беларусь"
            mode="default_green"
            labelSize="large"
            image={{
              icon: locationHeader,
              iconSize: 'medium',
              alt: 'Location'
            }}
          />
        </div>
        <div className="right-part-of-header">
          <Button
            className="btn_type_primary"
            mode="primary_green"
            onClick={mail ? this.handleAddProduct : toggleIsOpenModel}
            labelSize="large"
            label="Подать объявление"
            image={{
              icon: plus,
              iconSize: 'small',
              alt: 'Plus'
            }}
          />
          <Button
            className="btn_type_secondary"
            mode="primary_green"
            onClick={mail ? this.handleAddProduct : toggleIsOpenModel}
            image={{
              icon: plus,
              iconSize: 'small',
              alt: 'Plus'
            }}
            labelSize="large"
            label="Объявление"
          />
          {mail
            ? (
              <IconButton
                onClick={this.handleNavUser}
                image={{
                  icon: human,
                  iconSize: 'large',
                  alt: 'Human'
                }}
              />
            )
            : (
              <Button
                className="btn-login"
                mode="secondary_green"
                label="Вход"
                labelSize="large"
                onClick={toggleIsOpenModel}
              />
            )
          }
        </div>
        {isOpenWindow && <ModelWindow toggleIsOpenModel={toggleIsOpenModel} />}
        <div className={navUser ? 'nav-user' : 'nav-user-invisible'}>
          <Button
            mode="default"
            label="Личный кабинет"
            labelSize="large"
            onClick={this.handlePersonalRoom}
          />
          <Button
            mode="default"
            label="Выход"
            labelSize="large"
            onClick={this.handleSignOut}
          />
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isOpenWindow: getIsOpenWindow(state),
  mail: getUserMail(state)
});

export default withRouter(connect(mapStateToProps, {toggleIsOpenModel, changeUser})(Header));
