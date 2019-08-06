import React, {Component} from "react";
import './style.css';
import Header from '../Header';
import Navigation from '../Navigation';
import MainContent from "../MainContent";
import Footer from "../Footer";

class App extends Component {
  render() {
    return (
        <div className="page-container">
          <Header />
          <Navigation />
          <MainContent />
          <Footer />
        </div>
    );
  }
}

export default App;