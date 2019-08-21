import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import './style.css';
import Header from '../Header';
import Navigation from '../Navigation';
import MainContent from '../MainContent';
import Footer from '../Footer';
import {getProductAsync} from '../../actions/products';

class App extends PureComponent{
  componentDidMount() {
    this.props.getProductAsync('kufar');
  }

  render(){
    return(
      <div className="page-container">
        <Header />
        <Navigation />
        <MainContent />
        <Footer />
      </div>
    );
  }
}



export default connect(null, {getProductAsync})(App);
