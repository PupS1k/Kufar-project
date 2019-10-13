import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import MainContent from '../MainContent';
import AddProduct from '../AddProduct';
import Footer from '../Footer';
import PersonalRoom from '../PersonalRoom';
import NotFoundPage from '../NotFoundPage';
import {getProductAsync} from '../../actions/products';
import {getUserId} from '../../selectors/user';
import './style.css';

class App extends PureComponent {
  componentDidMount() {
    this.props.getProductAsync();
  }

  render() {
    const {userId} = this.props;
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
                </div>
              )}
              exact
            />
            {userId && (
            <Route
              path="/addProduct"
              component={AddProduct}
            />
            )}
            {userId && (
            <Route
              path="/personalRoom"
              component={PersonalRoom}
            />
            )}
            <NotFoundPage />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  userId: getUserId(state)
});


export default connect(mapStateToProps, {getProductAsync})(App);
