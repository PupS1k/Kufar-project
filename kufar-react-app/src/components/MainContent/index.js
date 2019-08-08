import React, {PureComponent} from 'react';
import FilterPanel from './FilterPanel';
import ProductList from './ProductList';
import MainContentBar from './MainContentBar';
import Pagination from './Pagination';
import products from '../../products';

import ContextProvider from './Context';

class MainContent extends PureComponent {
  state = {
    categoriesFilter: '',
    correctProducts: products,
    products
  };

  handleCategoriesFilter = (value) => {
    const correctProducts = products.filter(product => product.categories.indexOf(value) > -1
      || value === 'Все категории' || value === '');
    this.setState({correctProducts});
    this.handleProducts(correctProducts);
    this.setState({categoriesFilter: value});
  };

  handleProducts = value => this.setState({products: value});

  render() {
    return (
      <div className="main-content">
        <MainContentBar />
        <div className="main-content-body">
          <ContextProvider value={this.handleCategoriesFilter}>
            <FilterPanel
              handleProducts={this.handleProducts}
              handleCategoriesFilter={this.handleCategoriesFilter}
              products={this.state.correctProducts}
            />
          </ContextProvider>
          <ProductList
            categoriesFilter={this.state.categoriesFilter}
            products={this.state.products}
          />
        </div>
        <Pagination />
      </div>
    );
  }
}

export default MainContent;
