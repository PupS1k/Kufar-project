import React, {Component} from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {changeCategoriesFilter} from '../../actions/products';
import {categories} from '../../constants';

class CategoryFilter extends Component {
  state = {
    activeCategory: ''
  };

  handleCategory = (event) => {
    const activeCategory = event.currentTarget.innerHTML;
    this.props.changeCategoriesFilter(activeCategory);
    this.setState({activeCategory});
  };

  render() {
    return (
      <div className="category-filter">
        {categories.map(category => (
          <a
            key={category}
            className={classNames('nav-filter', {
              'active-category': category === this.state.activeCategory
            })}
            onClick={this.handleCategory}
          >
            {category}
          </a>
        ))}
      </div>
    );
  }
}

export default connect(null, {changeCategoriesFilter})(CategoryFilter);
