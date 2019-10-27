import React from 'react';
import FilterPanel from './FilterPanel';
import ProductList from '../ProductList';
import MainContentBar from './MainContentBar';
import Pagination from './Pagination';
import './style.css';

const MainContent = () => (
  <div className="main-content">
    <MainContentBar />
    <div className="main-content-body">
      <FilterPanel />
      <ProductList />
    </div>
    <Pagination />
  </div>
);

export default MainContent;
