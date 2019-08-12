import React from 'react';
import locationItem from '../../../images/locationItem.png';

const ProductCard = props => (
  <div className="product-card">
    <div className="product-card--img" style={{backgroundImage: props.image}} />
    <div className="info-about-product">
      <div className="top-part-of-product-card">
        <div>
          <p className="top-part-of-product-card--txt name-product">{props.nameProduct}</p>
          <p className="top-part-of-product-card--txt categories-product">
            {props.categoriesProduct + (props.stateProduct !== 'Любое' ? `, ${props.stateProduct}` : '')}
          </p>
        </div>
        <p className="top-part-of-product-card--txt price-product">
          {typeof props.priceProduct === 'number' ? `${props.priceProduct} р.` : props.priceProduct}
        </p>
      </div>
      <div className="bot-part-of-product-card">
        <div className="location-product">
          <img className="location-product--img" src={locationItem} alt="Location" />
          <p>{props.locationProduct}</p>
        </div>
        <p className="announced-product">{props.announcedProduct}</p>
      </div>
    </div>
  </div>
);

export default ProductCard;