import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import locationItem from '../../images/locationItem.png';
import Button from '../Button';
import './style.css';

const ProductCardLine = ({product, handleDelete}) => (
  <div className="product-card-line">
    <div
      className="product-card-line__img"
      style={{backgroundImage: product.image && `url('http://localhost:3000/api/images/${product.image}')`}}
    />
    <div className="info-about-product">
      <div className="top-part-of-product-card">
        <div>
          <p className="product-card__container product-card__name">{product.name}</p>
          <p className="product-card__container categories-product">
            {product.categories + (product.state !== 'Любое' ? `, ${product.state}` : '')}
          </p>
        </div>
        <p className="product-card__container product-card__price">
          {Number(product.price) ? `${product.price} р.` : product.price}
        </p>
      </div>
      <div className="bot-part-of-product-card">
        <div className="product-card__location">
          <img className="product-card__location_img" src={locationItem} alt="Location"/>
          <p>{product.location}</p>
        </div>
        <ReactTimeAgo date={new Date(product.createDate)} locale="ru"/>
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

export default ProductCardLine;
