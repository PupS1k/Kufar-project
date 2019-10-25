import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import ProductCard from './ProductCard';
import {getIsLoading, getProducts} from '../../../selectors/products';
import {guid} from '../../../utils';
import spinner from '../../../images/spinner.gif';
import './style.css';

class ProductList extends PureComponent {
  render() {
    const {products, isLoading} = this.props;
    return (
      <div className="product-list">
        {isLoading ? <img className="spinner" src={spinner} alt="Spinner"/>
          : products.length === 0
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
  products: getProducts(state),
  isLoading: getIsLoading(state)
});

export default connect(mapStateToProps)(ProductList);
