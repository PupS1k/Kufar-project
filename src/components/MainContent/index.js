import React from 'react';
import FilterPanel from '../FilterPanel';
import ProductList from '../ProductList';
import MainContentBar from './MainContentBar';
import './style.css';

const MainContent = () => (
  <div className="main-content">
    <MainContentBar />
    <div className="main-content-body">
      <FilterPanel className="filter-panel" />
      <ProductList />
    </div>
  </div>
);

export default MainContent;
