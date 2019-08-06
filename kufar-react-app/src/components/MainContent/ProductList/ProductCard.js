import React from 'react';
import locationItem from "../../../images/locationItem.png";

const ProductCard = ({image, nameProduct, categoriesProduct, priceProduct, locationProduct, announcedProduct}) => (
    <div className="product-card">
      <div className="product-card--img" style={{backgroundImage: image}}/>
      <div className="info-about-product">
        <div className="top-part-of-product-card">
          <div>
            <p className="top-part-of-product-card--txt name-product">{nameProduct}</p>
            <p className="top-part-of-product-card--txt categories-product">{categoriesProduct}</p>
          </div>
          <p className="top-part-of-product-card--txt price-product">{priceProduct} р.</p>
        </div>
        <div className="bot-part-of-product-card">
          <div className="location-product">
            <img className="location-product--img" src={locationItem} alt="Location"/>
            <p>{locationProduct}</p>
          </div>
          <p className="announced-product">{announcedProduct}</p>
        </div>
      </div>
    </div>
);

export default ProductCard;