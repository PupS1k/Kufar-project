import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import filters from '../reducers/filters';
import products from '../reducers/products';
import user from '../reducers/user';
import {watchAddProducts} from '../sagas/products';
import {watchLogIn, watchRegistration} from '../sagas/user';


const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  filters,
  products,
  user
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(watchAddProducts);
sagaMiddleware.run(watchRegistration);
sagaMiddleware.run(watchLogIn);

export default store;
