import React from 'react';
import CategoriesFilter from "./CategoriesFilter";
import LocationFilter from "./LocationFilter";
import PriceFilter from "./PriceFilter";
import SwitchFilter from "./SwitchFilter";

const regions = ['Область', 'Брестская', 'Могилевская', 'Гомельская', 'Витебская', 'Гродненская', 'Минск'];
const cities = ['Любой', 'Брестская', 'Могилевская', 'Гомельская', 'Витебская', 'Гродненская', 'Минск'];
const stateFilter = [{name:'Любой', checked: true}, {name:'Новое', checked: false}, {name:'Б/у', checked: false}];
const sellerFilter = [{name:'Любой', checked: true},
  {name:'Частное лицо', checked: false}, {name:'Компания', checked: false}];
const checkboxFilter = [{name:'Модное лето'}, {name:'Рассорчка по халве'},
  {name:'Только с фото'}, {name:'Возможен обмен'}];


const FilterPanel = () => (
    <div className="filter-panel">
      <CategoriesFilter />
      <div className="other-filters-container">
        <LocationFilter
            id="list-region-filter"
            headline="ВСЯ БЕЛАРУСЬ"
            options={regions}
        />
        <LocationFilter
            id={'list-city-filter'}
            headline={'ГОРОД / РАЙОН'}
            options={cities}
            disabled
        />
        <PriceFilter />
        <SwitchFilter
            headline="Состояние"
            classNameFilter="state-filter"
            typeSwitch="radio"
            nameRadioBtn="state"
            filters={stateFilter}
        />
        <SwitchFilter
            headline="ПРОДАВЕЦ"
            classNameFilter="seller-filter"
            typeSwitch="radio"
            nameRadioBtn="seller"
            filters={sellerFilter}
        />
        <SwitchFilter
            classNameFilter="additional-modes"
            typeSwitch="checkbox"
            filters={checkboxFilter}
        />
        <button className="btn--show-result">Показать результаты(62893)</button>
        <button className="btn--reset-filters">Сбросить фильтры</button>
        <button className="btn--save-search">Сохранить поиск</button>
    </div>
    </div>

);

export default FilterPanel;