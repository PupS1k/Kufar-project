import React, {PureComponent} from 'react';
import {Context} from '../Context';

const categories = ['Все категории', 'Модное лето', 'Недвижимость', 'Авто и транспорт', 'Техника',
  'Мода и стиль', 'Все для детей и мам', 'Все для дома', 'Ремонт и стройка', 'Сад и огород',
  'Хобби, спорт и туризм', 'Свадьба и праздники', 'Животные', 'Работа, бизнес, учеба', 'Услуги', 'Прочее'];

class CategoriesFilter extends PureComponent {
  static contextType = Context;

  state = {
    activeCategory: ''
  };

  handleCategory = (event) => {
    const activeCategory = event.currentTarget.innerHTML;
    this.context(activeCategory);
    this.setState({activeCategory});
  };

  render() {
    return (
      <div className="categories-filter">
        {categories.map(category => (
          <a
            key={category}
            className={`nav-filter${category === this.state.activeCategory ? ' active-category' : ''}`}
            onClick={this.handleCategory}
          >
            {category}
          </a>
        ))}
      </div>
    );
  }
}

export default CategoriesFilter;
