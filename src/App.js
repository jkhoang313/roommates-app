import './App.css';
import React, { Component } from 'react';
import NavBar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        < NavBar />
        <div className="container col">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
