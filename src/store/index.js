import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import products from '../reducers/products';
import user from '../reducers/user';
import {watchGetProducts, watchCreateProduct} from '../sagas/products';
import {watchLogIn, watchRegistration} from '../sagas/user';


const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
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

sagaMiddleware.run(watchGetProducts);
sagaMiddleware.run(watchCreateProduct);
sagaMiddleware.run(watchRegistration);
sagaMiddleware.run(watchLogIn);

export default store;
