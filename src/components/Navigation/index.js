import React, {PureComponent} from 'react';
import Button from '../Button';
import IconButton from '../IconButton';
import lines from '../../images/lines.png';
import shirt from '../../images/shirt.png';
import arrow from '../../images/arrow.png';
import CategoryFilter from '../FilterPanel/CategoryFilter';
import {navBtn} from '../../constants';
import './style.css';

class Navigation extends PureComponent {
  state = {
    isDropdownOpen: false
  };

  handleDropdown = () => this.setState(({isDropdownOpen}) => ({isDropdownOpen: !isDropdownOpen}));

  render() {
    const {isDropdownOpen} = this.state;
    return (
      <nav className="navigation">
        <Button
          className="btn_category_primary"
          onClick={this.handleDropdown}
          mode="default_blue"
          label="Категории"
          labelSize="large"
          bold
          image={{
            iconSize: 'large',
            icon: lines,
            alt: 'Lines'
          }}
        />
        <div className={isDropdownOpen ? 'dropdown-nav' : 'dropdown-nav-invisible'}>
          <CategoryFilter handleCategoryFilter={this.props.changeCategoriesFilter} />
        </div>
        <div className="scroll-panel-nav">
          <Button
            className="nav-category"
            label="Модное лето"
            labelSize="large"
            mode="default"
            image={{
              iconSize: 'large',
              icon: shirt,
              alt: 'Shirt'
            }}
          />
          {navBtn.map(text => (
            <Button
              key={text}
              className="nav-category"
              mode="default"
              label={text}
              labelSize="large"
            />
          ))}
        </div>
        <div className="scroll-panel">
          <IconButton
            className="scroll-panel__btn_left"
            image={{
              iconSize: 'small',
              icon: arrow,
              alt: 'Arrow'
            }}
          />
          <IconButton
            className="scroll-panel__btn_right"
            image={{
              iconSize: 'small',
              icon: arrow,
              alt: 'Arrow'
            }}
          />
        </div>
      </nav>
    );
  }
}

export default Navigation;
