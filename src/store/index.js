import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import products from '../reducers/products';
import user from '../reducers/user';
import sagasRoot from '../sagas';


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

sagaMiddleware.run(sagasRoot);

export default store;
