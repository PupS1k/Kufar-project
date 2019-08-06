import React from 'react';
import ProductCard from "./ProductCard";
import products from '../../../products';

const ProductList = () => (
    <div className="product-list">
      {products.map(product => (
          <ProductCard
              image={product.image}
              nameProduct={product.name}
              categoriesProduct={product.categories}
              priceProduct={product.price}
              locationProduct={product.location}
              announcedProduct={product.announced}
          />
      ))}
    </div>
);

export default ProductList;