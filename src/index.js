import './index.css'
import 'jquery/dist/jquery.js'
import 'materialize-css/bin/materialize.js'
import 'materialize-css/bin/materialize.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise'
import routes from './routes'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))

ReactDOM.render(
  < Provider store={ store }>
    < Router history={ browserHistory } routes={ routes } />
  < /Provider >,
  document.getElementById('root')
);
