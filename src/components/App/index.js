import React from 'react';
import './style.css';
import Header from '../Header';
import Navigation from '../Navigation';
import MainContent from '../MainContent';
import Footer from '../Footer';

const App = () => (
  <div className="page-container">
    <Header />
    <Navigation />
    <MainContent />
    <Footer />
  </div>
);

export default App;
