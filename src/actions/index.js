import axios from 'axios'
import { browserHistory } from 'react-router'
import usersAdapter from '../adapters/usersAdapter'
import messagesAdapter from '../adapters/messagesAdapter'

export function createUser(userObject) {
  const response = usersAdapter.createUser(userObject)

  return {
    type: "CREATE_USER",
    payload: response
  }
}

export function logout() {
  return {
    type: "UPDATE_SESSION",
    payload: false
  }
}

export function login(userObject) {
  var response = usersAdapter.login(userObject)

  return {
    type: "UPDATE_SESSION",
    payload: response
  }
}

export function createHome(homeObject) {
  var response = usersAdapter.createHome(homeObject)

  return {
    type: "CREATE_HOME",
    payload: response
  }
}

export function fetchUser() {
  var response = usersAdapter.fetchUser()

  return {
    type: "FETCH_USER",
    payload: response
  }
}

export function fetchMessages(){
  const messages = messagesAdapter.fetchMessages()

  return {
    type: 'FETCH_MESSAGES',
    payload: messages
  }
}

export function addMessage(message){
  const newMessage = messagesAdapter.addMessage({message_content: message})
  return {
    type: 'ADD_MESSAGE',
    payload: newMessage
  }
}
