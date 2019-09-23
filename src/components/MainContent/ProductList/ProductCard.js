import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import IconButton from '../../Button/IconButton';
import locationItem from '../../../images/locationItem.png';
import trashcan from '../../../images/trashcan.png';

const ProductCard = ({product, handleDelete}) => {
  return (
    <div className="product-card">
      <div
        className="product-card__img"
        style={{backgroundImage: product.image && `url(http://localhost:3000/images/${product.image}`}}
      />
      <div className="info-about-product">
        <div className="top-part-of-product-card">
          <div>
            <p className="top-part-of-product-card__txt name-product">{product.name}</p>
            <p className="top-part-of-product-card__txt categories-product">
              {product.categories + (product.stateProduct !== 'Любое' ? `, ${product.state}` : '')}
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
          <ReactTimeAgo date={new Date(product.announced)} locale="ru" />
        </div>
      </div>
      {handleDelete && (
        <IconButton
          onClick={handleDelete(product.id)}
          image={{
            icon: trashcan,
            iconSize: 'large',
            alt: 'Trashcan'
          }}
        />
      )}
    </div>
  );
}

export default ProductCard;
