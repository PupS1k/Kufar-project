import {combineReducers} from 'redux';
import products from './products';
import user from './user';
import filters from './filters';

export default combineReducers({
  products,
  user,
  filters
});
