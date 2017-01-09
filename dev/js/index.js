import 'babel-polyfill'; // take code and make it backwards compatible
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux'; // Imports a function from the module redux
import allReducers from './reducers';
import App from './components/app';


const store = createStore(allReducers); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
