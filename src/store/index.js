import {
  createStore, applyMiddleware, compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import sagasRoot from '../sagas';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagasRoot);

export default store;
