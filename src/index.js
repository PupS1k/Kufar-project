import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import JavascriptTimeAgo from 'javascript-time-ago';
import ru from 'javascript-time-ago/locale/ru';
import App from './components/App';
import store from './store';


JavascriptTimeAgo.locale(ru);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
