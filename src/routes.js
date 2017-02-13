import React from 'react'
import { Route, IndexRoute }  from 'react-router'
import App from './App'
import Homepage from './components/homepage'
import SignupPage from './components/signup_page'

export default (
  <Route path="/" component={App}>
    <Route path="homepage" component={Homepage}/>
    <Route path="signup" component={SignupPage}/>
  </Route>
)
