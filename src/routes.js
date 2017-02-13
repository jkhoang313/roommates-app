import React from 'react'
import { Route, IndexRoute }  from 'react-router'
import App from './App'
import Homepage from './components/Homepage'
import SignupPage from './components/SignupPage'

export default (
  <Route path="/" component={App}>
    <Route path="homepage" component={Homepage}/>
    <Route path="signup" component={SignupPage}/>
  </Route>
)
