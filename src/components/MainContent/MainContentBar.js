import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Button from '../Button';
import IconButton from '../IconButton';
import {getAllProducts, getIsLineDisplay, getProducts} from '../../selectors/products';
import {changeProducts, changeDisplayProducts} from '../../actions/products';
import switches from '../../images/switch.png';
import linesInterface from '../../images/linesInterface.png';
import squares from '../../images/square4.png';
import ModalWindow from '../ModalWindow';
import FilterPanel from '../FilterPanel';

class MainContentBar extends PureComponent {

  state = {
    sortValue: 'По дате',
    isOpenFilters: false
  };

  componentDidUpdate(prevProps, prevState) {
    const {sortValue} = this.state;
    if(prevState.sortValue !== sortValue){
      const {products, changeProducts} = this.props;
      switch(sortValue){
        case 'По дате':
          changeProducts([...products]
            .sort((first, second) => first.createDate > second.createDate ? 1 : -1));
          break;
        case 'По цене ↑':
          changeProducts([...products].sort((first, second) => {
            const numFirst = Number(first.price);
            const numSecond = Number(second.price);
            if(isNaN(numFirst) && !isNaN(numSecond)) return 1;
            if(!isNaN(numFirst) && isNaN(numSecond)) return -1;
            if(!isNaN(numFirst) && !isNaN(numSecond)) return numFirst > numSecond ? -1 : 1;
            return 0;
          }));
          break;
        case 'По цене ↓':
          changeProducts([...products].sort((first, second) => {
            const numFirst = Number(first.price);
            const numSecond = Number(second.price);
            if(isNaN(numFirst) && !isNaN(numSecond)) return -1;
            if(!isNaN(numFirst) && isNaN(numSecond)) return 1;
            if(!isNaN(numFirst) && !isNaN(numSecond)) return numFirst > numSecond ? 1 : -1;
            return 0;
          }));
          break;
      }
    }
  }

  toggleIsOpenFilters = () => this.setState(({isOpenFilters}) => ({isOpenFilters: !isOpenFilters}));

  handleSortProducts = event => this.setState({sortValue: event.currentTarget.value});

  render(){
    const {allProducts, isLineDisplay, changeDisplayProducts} = this.props;
    const {isOpenFilters} = this.state;
    return(
      <div className="main-content-bar">
        <div className="cup-of-mainpage__text">
          <p className="main-content-bar__txt headline">Kufar - площадка объявлений в Беларуси</p>
          <p className="main-content-bar__txt count-product">Объявлений: {allProducts.length}</p>
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
              onClick={this.toggleIsOpenFilters}
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
        {isOpenFilters &&
          <ModalWindow toggleIsOpenModal={this.toggleIsOpenFilters}>
            <FilterPanel className="filter-panel-modal" />
          </ModalWindow>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allProducts: getAllProducts(state),
  isLineDisplay: getIsLineDisplay(state),
  products: getProducts(state)
});

export default connect(mapStateToProps, {changeProducts, changeDisplayProducts})(MainContentBar);
