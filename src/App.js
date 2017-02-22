import './App.css';
import React, { Component } from 'react';
import NavBar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        { this.props.children }
      </main>
    );
  }
}

export default App;
