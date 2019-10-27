import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import locationItem from '../../images/locationItem.png';
import './style.css';

const ProductCardSquare = ({product}) => (
  <div className="product-card-square">
    <div
      className="product-card-square__img"
      style={{backgroundImage: product.image && `url('http://localhost:3000/api/images/${product.image}')`}}
    >
      <ReactTimeAgo date={new Date(product.createDate)} locale="ru" />
    </div>
    <p className="product-card__container">
      {product.categories + (product.state !== 'Любое' ? `, ${product.state}` : '')}
    </p>
    <p className="product-card__name">{product.name}</p>
    <div className="product-card__location">
      <img className="product-card__location_img" src={locationItem} alt="Location"/>
      <p>{product.location}</p>
    </div>
    <p className="product-card__price">
      {Number(product.price) ? `${product.price} р.` : product.price}
    </p>
  </div>
);

export default ProductCardSquare;
