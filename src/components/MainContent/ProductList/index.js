import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import ProductCard from './ProductCard';
import {getProducts} from '../../../selectors/products';
import guid from '../../../utils';
import './style.css';

class ProductList extends PureComponent {
  render() {
    const {products} = this.props;
    return (
      <div className="product-list">
        {products.length === 0
          ? (
            <div className="no-products">
              <p>Нет объявлений по данной категории</p>
            </div>
          )

          : products.map(product => (
            <ProductCard
              key={guid()}
              product={product}
            />
          ))
          }
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: getProducts(state)
});

export default connect(mapStateToProps)(ProductList);
