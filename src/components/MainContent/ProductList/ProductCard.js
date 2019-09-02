import React from 'react';
import locationItem from '../../../images/locationItem.png';

const ProductCard = props => (
  <div className="product-card">
    <div
      className="product-card__img"
      style={{backgroundImage: props.image && `url(http://localhost:3000/images/${props.image}`}}
    />
    <div className="info-about-product">
      <div className="top-part-of-product-card">
        <div>
          <p className="top-part-of-product-card__txt name-product">{props.nameProduct}</p>
          <p className="top-part-of-product-card__txt categories-product">
            {props.categoriesProduct + (props.stateProduct !== 'Любое' ? `, ${props.stateProduct}` : '')}
          </p>
        </div>
        <p className="top-part-of-product-card__txt price-product">
          {Number(props.priceProduct) ? `${props.priceProduct} р.` : props.priceProduct}
        </p>
      </div>
      <div className="bot-part-of-product-card">
        <div className="location-product">
          <img className="location-product__img" src={locationItem} alt="Location" />
          <p>{props.locationProduct}</p>
        </div>
        <p className="announced-product">{props.announcedProduct}</p>
      </div>
    </div>
  </div>
);

export default ProductCard;
