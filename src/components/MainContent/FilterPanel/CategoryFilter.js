import React, {Component} from 'react';
import classNames from 'classnames';
import {categories} from '../../../constants/filters';


class CategoryFilter extends Component {
  state = {
    activeCategory: ''
  };

  handleCategory = (event) => {
    const activeCategory = event.currentTarget.innerHTML;
    this.props.handleCategoryFilter(activeCategory);
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

export default CategoryFilter;
