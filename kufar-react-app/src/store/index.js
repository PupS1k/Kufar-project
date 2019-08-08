import {createStore, combineReducers} from 'redux';
import filters from '../reducer/filters';
import products from '../reducer/products';

const reducer = combineReducers({
  filters,
  products
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
