import React from 'react'
import { Route }  from 'react-router'
import App from './App'
import Homepage from './components/Homepage'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import Chat from './components/Chat'

export default (
  <Route path="/" component={App}>
    <Route path="homepage" component={Homepage}/>
    <Route path="signup" component={SignupPage}/>
    <Route path="login" component={LoginPage}/>
  </Route>
)
