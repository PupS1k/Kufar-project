import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import ProductCard from './ProductCard';
import {getProducts} from '../../../selectors/products';
import './style.css';

class ProductList extends PureComponent {
  render() {
    const {products} = this.props;
    return (
      <div className="product-list">
        {products.length === 0
          ? (
            <div className="noProducts">
              <p>No Products for this category</p>
            </div>
          )
          : products.map(product => (
            <ProductCard
              key={product.name}
              image={product.image}
              nameProduct={product.name}
              categoriesProduct={product.categories}
              stateProduct={product.state}
              sellerProduct={product.seller}
              fashionableSummer={product.fashionableSummer}
              installmentHalva={product.installmentHalva}
              isExchange={product.isExchange}
              priceProduct={product.price}
              locationProduct={product.location}
              announcedProduct={product.announced}
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
