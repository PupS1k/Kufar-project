import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Pagination from '../MainContent/Pagination';
import ProductCard from '../MainContent/ProductList/ProductCard';
import {getUserProducts} from '../../selectors/user';
import {deleteUserProductAsync} from '../../actions/user';
import guid from '../../utils';

class PersonalArea extends PureComponent {
  handleDeleteProduct = id => () => this.props.deleteUserProductAsync(`products/${id}`);

  render() {
    const {products, history} = this.props;
    return (
      <div className="personal-room">
        {products.map(product => (
          <ProductCard
            key={guid()}
            product={product}
            path={history.location.pathname}
            handleDelete={this.handleDeleteProduct}
          />
        ))}
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: getUserProducts(state)
});

export default connect(mapStateToProps, {deleteUserProductAsync})(PersonalArea);
