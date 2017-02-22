import './App.css';
import React, { Component } from 'react';
import NavBar from './components/Navbar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

export default App;
