import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import SignUpPage from './components/signup_page'
import Homepage from './components/homepage'

class App extends Component {
  render() {
    return (
      <div>
        < NavBar />
        <div className="container">
          < Homepage />
        </div>
      </div>
    );
  }
}

export default App;
