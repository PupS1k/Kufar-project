import React, {PureComponent} from 'react';
import ReactTimeAgo from 'react-time-ago';
import locationItem from '../../../images/locationItem.png';
import Button from '../../Button';

class ProductCard extends PureComponent {
  state = {
    imgToBase64: ''
  };

  componentDidMount() {
    const {product:{image}} = this.props;
    fetch(`/api/images/${image}`)
      .then(res => res.json()).then(res => this.setState({imgToBase64: res}));
  }

  render(){
    const {product, handleDelete} = this.props;
    return (
        <div className="product-card">
          <div
            className="product-card__img"
            style={{backgroundImage: product.image && `url('data:image/jpeg;base64,${this.state.imgToBase64}')`}}
          />
          <div className="info-about-product">
            <div className="top-part-of-product-card">
              <div>
                <p className="top-part-of-product-card__txt name-product">{product.name}</p>
                <p className="top-part-of-product-card__txt categories-product">
                  {product.categories + (product.state !== 'Любое' ? `, ${product.state}` : '')}
                </p>
              </div>
              <p className="top-part-of-product-card__txt price-product">
                {Number(product.price) ? `${product.price} р.` : product.price}
              </p>
            </div>
            <div className="bot-part-of-product-card">
              <div className="location-product">
                <img className="location-product__img" src={locationItem} alt="Location" />
                <p>{product.location}</p>
              </div>
              <ReactTimeAgo date={new Date(product.createDate)} locale="ru" />
            </div>
          </div>
          {handleDelete && (
            <Button
              onClick={handleDelete(product.id)}
              label="Удалить"
              labelSize="large"
              mode="secondary_red"
            />
          )}
        </div>
      );
    }
}

export default ProductCard;
