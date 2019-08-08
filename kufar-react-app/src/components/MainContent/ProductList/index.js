import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({products}) => (
  <div className="product-list">
    {products.length === 0
      ? (
        <div className="noProducts">
          <p>No Products for this category</p>
        </div>
      )
      : products.map(product => (
        <ProductCard
          key={product.name}
          image={product.image}
          nameProduct={product.name}
          categoriesProduct={product.categories}
          stateProduct={product.stateProduct}
          sellerProduct={product.seller}
          fashionableSummer={product.fashionableSummer}
          installmentHalva={product.installmentHalva}
          isExchange={product.isExchange}
          priceProduct={product.price}
          locationProduct={product.location}
          announcedProduct={product.announced}
        />
      ))}
  </div>
);

export default ProductList;
