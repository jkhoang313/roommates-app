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
import HouseRules from './components/HouseRules'
import EditProfile from './components/EditProfile'
import EditHome from './components/EditHome'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Sitepage}/>
    <Route path="homepage" component={ Homepage }>
      <Route path="chat" component={ Chat }/>
      <Route path="bills" component={ Bill }/>
      <Route path="calendar" component={ Calendar }/>
      <Route path="house_rules" component={ HouseRules }/>
    </Route>
    <Route path="signup" component={ SignupPage }/>
    <Route path="login" component={ LoginPage }/>
    <Route path="edit_profile" component={ EditProfile }/>
    <Route path="edit_home" component={ EditHome }/>
  </Route>
)
