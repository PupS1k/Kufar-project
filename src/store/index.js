import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import filters from '../reducer/filters';
import products, {watchAddProducts} from '../reducer/products';


const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  filters,
  products
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(watchAddProducts);

export default store;
