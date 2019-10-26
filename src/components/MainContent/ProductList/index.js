import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getIsLineDisplay, getIsLoading, getProducts} from '../../../selectors/products';
import {guid} from '../../../utils';
import spinner from '../../../images/spinner.gif';
import './style.css';
import ProductCardSquare from '../../ProductCardSquare';
import ProductCardLine from '../../ProductCardLine';

class ProductList extends PureComponent {
  render() {
    const {products, isLoading, isLineDisplay} = this.props;
    return (
      <div className={isLineDisplay ? "product-list-lines" : "product-list-squares"}>
        {isLoading ? <img className="spinner" src={spinner} alt="Spinner"/>
          : products.length === 0
            ? (
              <div className="no-products">
                <p>Нет объявлений по данной категории</p>
              </div>
            )

            : products.map(product => (
              isLineDisplay ? <ProductCardLine
                key={guid()}
                product={product}
              />
              : <ProductCardSquare
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
  isLoading: getIsLoading(state),
  isLineDisplay: getIsLineDisplay(state)
});

export default connect(mapStateToProps)(ProductList);
