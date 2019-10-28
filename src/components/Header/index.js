import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Button from '../Button';
import {logOut} from '../../actions/user';
import logo from '../../images/logo.png';
import kufar from '../../images/kufar.png';
import search from '../../images/search.png';
import locationHeader from '../../images/locationHeader.png';
import plus from '../../images/plus.png';
import ModalWindow from '../ModalWindow';
import IconButton from '../IconButton';
import {getUserId} from '../../selectors/user';
import human from '../../images/profile.png';
import {changeSearchValue} from '../../actions/products';
import Auth from '../Auth';
import './style.css';


class Header extends PureComponent {
  state = {
    isDropdownOpen: false,
    searchValue: '',
    isOpenAuth: false
  };

  toggleIsOpenAuth = () => this.setState(({isOpenAuth}) => ({isOpenAuth: !isOpenAuth}));

  handleSearch = (event) => {
    const {value} = event.currentTarget;
    this.setState({searchValue: value});
    this.props.changeSearchValue(value);
  };

  handleAddProduct = () => {
    if (this.state.isDropdownOpen) this.handleDropdown();
    this.handleAscent();
    this.props.history.push('/addProduct');
  };

  handleHome = () => {
    if (this.state.isDropdownOpen) this.handleDropdown();
    this.handleAscent();
    this.props.history.push('/');
  };

  handleDropdown = () => {
    const {isDropdownOpen} = this.state;
    this.setState({isDropdownOpen: !isDropdownOpen});
  };

  handleSignOut = () => {
    this.handleDropdown();
    this.handleHome();
    this.props.logOut();
  };

  handleAscent = () => window.scrollTo(0, 0);

  handlePersonalRoom = () => {
    this.handleDropdown();
    this.handleAscent();
    this.props.history.push('/personalRoom');
  };

  render() {
    const {userId} = this.props;
    const {isDropdownOpen, searchValue, isOpenAuth} = this.state;
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
            <input
              id="search-field"
              type="search"
              onChange={this.handleSearch}
              placeholder="Товар, услуга"
              value={searchValue}
            />
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
            onClick={userId ? this.handleAddProduct : this.toggleIsOpenAuth}
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
            onClick={userId ? this.handleAddProduct : this.toggleIsOpenAuth}
            image={{
              icon: plus,
              iconSize: 'small',
              alt: 'Plus'
            }}
            labelSize="large"
            label="Объявление"
          />
          {userId
            ? (
              <IconButton
                onClick={this.handleDropdown}
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
                onClick={this.toggleIsOpenAuth}
              />
            )
          }
        </div>
        {isOpenAuth
          && (
          <ModalWindow toggleIsOpenModal={this.toggleIsOpenAuth}>
            <Auth />
          </ModalWindow>
          )
        }
        <div className={isDropdownOpen ? 'dropdown-header' : 'dropdown-header-invisible'}>
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
  userId: getUserId(state)
});

export default withRouter(connect(mapStateToProps, {logOut, changeSearchValue})(Header));
