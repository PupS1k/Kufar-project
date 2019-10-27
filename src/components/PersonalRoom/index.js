import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import ProductCardLine from '../ProductCardLine';
import {getUserProducts} from '../../selectors/user';
import {deleteUserProductAsync} from '../../actions/user';
import {guid} from '../../utils';

class PersonalArea extends PureComponent {
  handleDeleteProduct = id => () => this.props.deleteUserProductAsync(`products/${id}`);

  render() {
    const {products, history} = this.props;
    return (
      <div className="personal-room">
        <div className="product-list">
          {products.length === 0
            ? (
              <div className="no-products">
                <p>Нет объявлений</p>
              </div>
            )
            : products.map(product => (
              <ProductCardLine
                key={guid()}
                product={product}
                path={history.location.pathname}
                handleDelete={this.handleDeleteProduct}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: getUserProducts(state)
});

export default connect(mapStateToProps, {deleteUserProductAsync})(PersonalArea);
