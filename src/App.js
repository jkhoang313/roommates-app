import './App.css';
import React, { Component } from 'react';
import NavBar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        < NavBar />
        { this.props.children }
      </div>
    );
  }
}

export default App;
