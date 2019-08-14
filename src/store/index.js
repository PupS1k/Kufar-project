import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import filters from '../reducers/filters';
import products from '../reducers/products';
import {watchAddProducts} from '../sagas/products';


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
