import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import MainContent from '../MainContent';
import AddProduct from '../AddProduct';
import Footer from '../Footer';
import PersonalRoom from '../PersonalRoom';
import {getProductAsync} from '../../actions/products';
import './style.css';

class App extends PureComponent {
  componentDidMount() {
    this.props.getProductAsync('products');
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="page-container">
          <Switch>
            <Route
              path="/"
              render={() => (
                <div>
                  <Navigation />
                  <MainContent />
                  <Footer />
                </div>
              )}
              exact
            />
            <Route
              path="/addProduct"
              component={AddProduct}
            />
            <Route
              path="/personalRoom"
              component={PersonalRoom}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default connect(null, {getProductAsync})(App);
