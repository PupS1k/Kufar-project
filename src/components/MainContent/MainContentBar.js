import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Button from '../Button';
import IconButton from '../IconButton';
import {getAllProducts, getIsLineDisplay} from '../../selectors/products';
import {addProductsBack, changeDisplayProducts} from '../../actions/products';
import switches from '../../images/switch.png';
import linesInterface from '../../images/linesInterface.png';
import squares from '../../images/square4.png';

class MainContentBar extends PureComponent {

  state = {
    sortValue: 'По дате'
  };

  componentDidUpdate(prevProps, prevState) {
    const {sortValue} = this.state;
    if(prevState.sortValue !== sortValue){
      const {products, addProductsBack} = this.props;
      switch(sortValue){
        case 'По дате':
          addProductsBack([...products]
            .sort((first, second) => first.createDate > second.createDate ? 1 : -1));
          break;
        case 'По цене ↑':
          addProductsBack([...products].sort((first, second) => first.price > second.price ? 1 : -1));
          break;
        case 'По цене ↓':
          addProductsBack([...products].sort((first, second) => first.price > second.price ? -1 : 1));
          break;
      }
    }
  }

  handleSortProducts = event => this.setState({sortValue: event.currentTarget.value});

  render(){
    const {products, isLineDisplay, changeDisplayProducts} = this.props;
    return(
      <div className="main-content-bar">
        <div className="cup-of-mainpage__text">
          <p className="main-content-bar__txt headline">Kufar - площадка объявлений в Беларуси</p>
          <p className="main-content-bar__txt count-product">Объявлений: {products.length}</p>
        </div>
        <div className="sortings-container">
          <select className="select-sortings" onChange={this.handleSortProducts}>
            <option>По дате</option>
            <option>По цене ↑</option>
            <option>По цене ↓</option>
          </select>
          <div className="switches-display">
            <Button
              mode="secondary_green"
              className="btn_show-filters"
              label="Фильтры"
              labelSize="large"
              image={{
                iconSize: 'medium',
                icon: switches,
                alt: 'Switch'
              }}
            />
            {isLineDisplay ?
              <IconButton
                onClick={changeDisplayProducts}
                className="switch-display__btn"
                image={{
                  iconSize: 'medium',
                  icon: squares,
                  alt: 'Square'
                }}
              />
              :
              <IconButton
                onClick={changeDisplayProducts}
                className="switch-display__btn"
                image={{
                  iconSize: 'medium',
                  icon: linesInterface,
                  alt: 'Lines interface'
                }}
              />
            }

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: getAllProducts(state),
  isLineDisplay: getIsLineDisplay(state)
});

export default connect(mapStateToProps, {addProductsBack, changeDisplayProducts})(MainContentBar);
