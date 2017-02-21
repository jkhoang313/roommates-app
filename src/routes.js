import React from 'react'
import { Route, IndexRoute }  from 'react-router'
import App from './App'
import Sitepage from './components/Sitepage'
import Homepage from './components/Homepage'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import Chat from './components/Chat'
import Bill from './components/Bill'
import Calendar from './components/Calendar'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Sitepage}/>
    <Route path="homepage" component={ Homepage }>
      <Route path="chat" component={ Chat }/>
      <Route path="bill" component={ Bill }/>
      <Route path="calendar" component={ Calendar }/>
    </Route>
    <Route path="signup" component={ SignupPage }/>
    <Route path="login" component={ LoginPage }/>
  </Route>
)
