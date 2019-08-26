import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import logo from '../../images/logo.png';
import kufar from '../../images/kufar.png';
import search from '../../images/search.png';
import locationHeader from '../../images/locationHeader.png';
import Button from '../Button';
import plus from '../../images/plus.png';
import Authorization from '../Authorization';
import {toggleIsAuthorization, changeUser} from '../../actions/user';
import {getIsAuthorizationOpen, getUserMail} from '../../selectors/user';

import './style.css';

class Header extends PureComponent {
  handleSignIn = () => this.props.changeUser('');

  render() {
    const {
      isAuthorizationOpen, toggleIsAuthorization, mail
    } = this.props;
    return (
      <header>
        <div className="left-part-of-header">
          <div className="logo">
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
            className="btn-location "
            icon={locationHeader}
            alt="Location"
            label="Вся Беларусь"
            status="default_green"
            labelSize="large"
            iconSize="medium"
          />
        </div>
        <div className="right-part-of-header">
          <Button
            className="btn_type_primary "
            icon={plus}
            status="primary_green"
            alt="Plus"
            labelSize="large"
            iconSize="small"
            label="Подать объявление"
          />
          <Button
            className="btn_type_secondary "
            icon={plus}
            status="primary_green"
            alt="Plus"
            labelSize="large"
            iconSize="small"
            label="Объявление"
          />
          {mail ? <button className="profile" onClick={this.handleSignIn} />
            : (
              <Button
                className="btn-login "
                status="secondary_green"
                label="Вход"
                labelSize="large"
              />
            )
          }
        </div>
        {isAuthorizationOpen && <Authorization />}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorizationOpen: getIsAuthorizationOpen(state),
  mail: getUserMail(state)
});

export default connect(mapStateToProps, {toggleIsAuthorization, changeUser})(Header);
