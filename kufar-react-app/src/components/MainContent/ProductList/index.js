import React from 'react';
import ProductCard from "./ProductCard";

const ProductList = () => (
    <div className="product-list">
      <ProductCard
          image="url(../../images/item.jpg)"
          nameProduct="Кастрюля"
          categoriesProduct="Кухонные приборы, Redmand, Б/у"
          priceProduct={100}
          locationProduct="Гомель"
          announcedProduct="Сегодня, 09:40"
      />
      {/*<div className="ad-container">*/}
      {/*  <div className="ad-container--img" style={{backgroundImage: "url(../images/item2.jpg)"}}/>*/}
      {/*  <div className="info-about-ad">*/}
      {/*    <div className="top-part-of-ad-container">*/}
      {/*      <div className="name-ad-container">*/}
      {/*        <p className="top-part-of-ad--txt name-ad">Наклейки Ледниковый период</p>*/}
      {/*        <p className="top-part-of-ad--txt info-ad">Коллекции</p>*/}
      {/*      </div>*/}
      {/*      <p className="top-part-of-ad--txt price-ad">1 р.</p>*/}
      {/*    </div>*/}
      {/*    <div className="bot-part-of-ad-container">*/}
      {/*      <div className="location-advertisement">*/}
      {/*        <img className="location-ad--img" src={locationItem} alt="Location"/>*/}
      {/*        <p className="bot-part-of-ad--text">Минск, Октябрьский</p>*/}
      {/*      </div>*/}
      {/*      <p className="bot-part-of-ad--text announced-ad">12 июля, 10:23</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="ad-container">*/}
      {/*  <div className="ad-container--img" style={{backgroundImage: "url(../images/item3.jpg)"}}/>*/}
      {/*  <div className="info-about-ad">*/}
      {/*    <div className="top-part-of-ad-container">*/}
      {/*      <div className="name-ad-container">*/}
      {/*        <p className="top-part-of-ad--txt name-ad">Куртка</p>*/}
      {/*        <p className="top-part-of-ad--txt info-ad">Женская одежда, Верхняя одежда, 52(XXL), Деми,*/}
      {/*          Новое</p>*/}
      {/*      </div>*/}
      {/*      <p className="top-part-of-ad--txt price-ad">10 р.</p>*/}
      {/*    </div>*/}
      {/*    <div className="bot-part-of-ad-container">*/}
      {/*      <div className="location-advertisement">*/}
      {/*        <img className="location-ad--img" src={locationItem} alt="Location"/>*/}
      {/*        <p className="bot-part-of-ad--text">Минская, Вилейка</p>*/}
      {/*      </div>*/}
      {/*      <p className="bot-part-of-ad--text announced-ad">23 июня, 19:30</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="ad-container">*/}
      {/*  <div className="ad-container--img" style={{backgroundImage: "url("+"../images/item4.jpg"+")"}}/>*/}
      {/*  <div className="info-about-ad">*/}
      {/*    <div className="top-part-of-ad-container">*/}
      {/*      <div className="name-ad-container">*/}
      {/*        <p className="top-part-of-ad--txt name-ad">Красавица поночка</p>*/}
      {/*        <p className="top-part-of-ad--txt info-ad">Домашние питомцы, Собаки</p>*/}
      {/*      </div>*/}
      {/*      <p className="top-part-of-ad--txt price-ad">Бесплатно</p>*/}
      {/*    </div>*/}
      {/*    <div className="bot-part-of-ad-container">*/}
      {/*      <div className="location-advertisement">*/}
      {/*        <img className="location-ad--img" src={locationItem} alt="Location"/>*/}
      {/*        <p className="bot-part-of-ad--text">Минск, Октябрьский</p>*/}
      {/*      </div>*/}
      {/*      <p className="bot-part-of-ad--text announced-ad">12 июля, 10:40</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
);

export default ProductList;