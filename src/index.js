import './index.css';
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'
import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import routes from './routes'
import App from './App';

ReactDOM.render(
  < Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
